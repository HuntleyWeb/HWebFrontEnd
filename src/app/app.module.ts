import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './menus/top-bar/top-bar.component';
import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { LinksComponent } from './content/links/links/links.component';
import { WebsitesComponent } from './content/web/websites/websites.component';
import { LoginComponent } from './content/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LinksComponent,
    WebsitesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
