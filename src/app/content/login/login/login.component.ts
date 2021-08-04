import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/login-user';
import { UserService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginUser ('', '', new Date());

  working = false;
  successful = false;
  error = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.successful = false;
    this.error = false;
    this.working = false;
  }

  onSubmit(){
    console.log("Login Email:" + this.model.LoginEmailAddress);
    console.log("Pwd:" + this.model.Password);

    this.working = true;

    this.userService.login(this.model.LoginEmailAddress, this.model.Password)
        .subscribe( response => {
          console.log("Login Response:" + response);

          this.successful = response;

          if (this.successful)
            this.router.navigate(['/profile']);
          else
            this.router.navigate(['/home']);
        });

  }

  resetForm()
  {
    this.model.LoginEmailAddress = '';
    this.model.Password = '';

    this.successful = false;
  }

}
