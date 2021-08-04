import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { LinksComponent } from './content/links/links/links.component';
import { WebsitesComponent } from './content/web/websites/websites.component';
import { LoginComponent } from './content/login/login/login.component';
import { LogoutComponent } from './content/logout/logout.component';
import { ProfileComponent } from './content/secure/profile/profile.component';

import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'logout', component:LogoutComponent },
  { path : 'home', component: HomeComponent },
  { path : 'about', component: AboutComponent },
  { path : 'contact', component: ContactComponent },
  { path : 'links', component:LinksComponent },
  { path : 'websites', component:WebsitesComponent} ,
  { path : 'profile', component:ProfileComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
