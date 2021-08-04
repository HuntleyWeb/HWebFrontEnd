import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url:string): true | UrlTree{
    console.log("Url :" + url);

    let val: string = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == "true"){
       if(url == "/login")
          this.router.parseUrl('/profile');
       else
          return true;
    } else {
       return this.router.parseUrl('/login');
    }
  }

}
