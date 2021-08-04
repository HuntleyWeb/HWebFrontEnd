import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  LoggedIn = false;

  ngOnInit() {

    console.log("Top-Bar-Component INIT");

    let url: string = this.router.url;
    let storedData = localStorage.getItem("isUserLoggedIn");

    console.log("StoredData: " + storedData + " Route: " + url);

    /*
    if( storedData != null && storedData == "true")
       this.LoggedIn = true;
    else
       this.LoggedIn = false;

    */

       this.userService.isLoggedIn.subscribe(lg => this.LoggedIn = lg);
  }

}
