import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import{ tap, delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: boolean = false;

  private loggedIn = new BehaviorSubject(false);
  isLoggedIn = this.loggedIn.asObservable();

  login (userName: string, password : string): Observable {

    console.log(userName);
    console.log(password);

    if (userName == "jon.huntley@hotmail.co.uk" && password == "pa55word")
    {
      this.isUserLoggedIn = true;
      this.loggedIn.next(true);
    }

    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("User Login Result:"+ val);
      })
    );
  }

  logout():void {
    this.isUserLoggedIn = false;
    this.loggedIn.next(false);

    localStorage.removeItem('isUserLoggedIn');
    console.log("Logged Out!");
  }

  constructor(private httpClient: HttpClient) { }
}
