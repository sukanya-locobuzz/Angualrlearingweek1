import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Default route to HomeComponent
  { path: 'about', component: AboutComponent }, // Route to AboutComponent
  { path: 'contact', component: ContactComponent }, // Route to ContactComponent
  { path: '**', redirectTo: '' }                 // Wildcard route redirects to home
];
