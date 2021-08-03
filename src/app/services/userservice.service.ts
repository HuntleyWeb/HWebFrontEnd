import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import{ tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: boolean = false;

  login (userName: string, password : string):Observable {

    console.log(userName);
    console.log(password);

    if (userName == "admin" && password == "admin")
      this.isUserLoggedIn = true;

    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("User Login Result:"+ val);
      })
    );
  }

  logout():void{
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor(private httpClient: HttpClient) { }
}
