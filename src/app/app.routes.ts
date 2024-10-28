import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyComponent } from './property/property.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {

    path:'home',
    component:HomeComponent


  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'property',
    component:PropertyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
 







];
