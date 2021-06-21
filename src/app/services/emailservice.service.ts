import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact';
import { Message } from '../models/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private sendingEmail = new BehaviorSubject(false);
  sending = this.sendingEmail.asObservable();

  private messageSent = new BehaviorSubject(false);
  messageSuccessful = this.messageSent.asObservable();

  private onError = new BehaviorSubject('');
  messagingError = this.onError.asObservable();

  mailEndpoint = environment.mailApiEndpoint;
  contactTarget = environment.contactUsTarget;
  mailServerUser = environment.mailServerUser;
  ccList = environment.notificationList;

  constructor(private httpClient: HttpClient) { }

  public async SendMessage(contactModel: Contact)
  {
    this.sendingEmail.next(true);
    this.messageSent.next(false);

    console.log('SendMessage() Called!' + contactModel.Name);

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    };

    const payload = this.createPayload(contactModel);

    // resolve() function invoked when async task is completed
    // reject() function invoked when task fails
    const promise = this.httpClient.post(this.mailEndpoint, payload, httpOptions)
        .toPromise();

    promise.then((response) => {
      console.log(response as JSON);

      this.sendingEmail.next(false);
      this.messageSent.next(true);

    }).catch((error) => {
      this.handleHttpError('SendMessage()', error);
    });

    /*
    const promise = new Promise((resolve, reject) => {
      this.httpClient.post(this.mailEndpoint, payload, httpOptions)
        .toPromise()
        .then(
          response => {
            // result = response as boolean;
            console.log(response as JSON);

            this.sendingEmail.next(false);
            this.messageSent.next(true);

            resolve();
          },
          err => {

            this.handleHttpError('SendMessage()', err);
            reject(err);
          }
        );
    });
    */

    //return promise;
  }

  handleHttpError(method: string, error: HttpErrorResponse)
  {
    console.log('Method:' + method);
    console.log('Status Code:' + error.status);
    console.log('Details:' + error.message);

    if (error.status === 404)
    {
      console.log('Service Not Available!');
    }

    this.sendingEmail.next(false);
    this.onError.next(error.message);
  }

  createPayload(contactModel: Contact)
  {
    let content: string = 'New Message From: <b>' + contactModel.Name + '</b><br>';

    content += 'Message Category:' + contactModel.Category + '<br>';
    content += '<p>' + contactModel.Message + '</p><br>End of Message....'

    const subject1 = contactModel.Category + ' ' + contactModel.Subject + ' From:' + contactModel.Name;

    const msg = new Message(
      this.mailServerUser,
      contactModel.EmailAddress,
      contactModel.Subject,
      content,
      this.ccList,
      true
    );

    return JSON.stringify(msg);
  }
}
