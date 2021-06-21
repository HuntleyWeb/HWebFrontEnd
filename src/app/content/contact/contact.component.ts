import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { EmailService } from '../../services/emailservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService ) { }

  telephone = '07841057610';
  sending = false;
  errDetails = '';
  categories = ['Website Work', 'Consultancy Work'];
  model = new Contact('Jon Smith', 'jon.huntley@hotmail.co.uk', '', 'Test Subject', 'Hello, I want to make a complaint', new Date());
  submitted = false;
  successful = false;

  ngOnInit() {
    this.categories.sort();

    this.emailService.sending.subscribe(snd => this.sending = snd);
    this.emailService.messageSuccessful.subscribe(c => this.onSuccess());
    this.emailService.messagingError.subscribe(err => this.onError(err));
  }

  async onSubmit()
  {
    console.log('submitted form');
    this.submitted = true;

    await this.emailService.SendMessage(this.model);

    console.log('***');
  }

  onSuccess()
  {

    console.log("Success!");

    //this.model.Message = '';
  }


  onError(error :string)
  {

    console.log('Messaging Error :' + error);
  }

  resetForm()
  {
    this.model.Name = '';
    this.model.EmailAddress = '';
    this.model.Subject = '';
    this.model.Message = '';
  }
}

