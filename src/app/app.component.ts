import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'huntleyweb';

  currentDate = new Date();
  anio: number = new Date().getFullYear();
  day = this.getWeekday();
  version = environment.vers;

  ngOnInit() {
    //let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("App-Component INIT");
 }

  getWeekday() {
    let weekDay = '';

    switch (new Date().getDay()) {
      case 1:
        weekDay = 'Monday';
        break;

      case 2:
        weekDay = 'Tuesday';
        break;

      case 3:
        weekDay = 'Wednesday';
        break;

      case 4:
        weekDay = 'Thursday';
        break;

      case 5:
        weekDay = 'Friday';
        break;

      case 6:
        weekDay = 'Saturday';
        break;

      default:
        weekDay = 'Sunday';
        break;
    }

    return weekDay;
  }
}
