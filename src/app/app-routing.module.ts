import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { LinksComponent } from './content/links/links/links.component';
import { WebsitesComponent } from './content/web/websites/websites.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'about', component: AboutComponent },
  { path : 'contact', component: ContactComponent },
  { path : 'links', component:LinksComponent },
  { path : 'websites', component:WebsitesComponent} ,
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
