import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userservice.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  LoggedIn = false;



  ngOnInit() {


  }

}
