import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {  SuccesfullComponent} from './succesfull/succesfull.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'menu',component:MainPageComponent},
  {path:'signup',component:RegisterPageComponent},
  {path:'login',component:LoginComponent},
  {path:'landing',component:LandingComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'contentpage',component:ContentpageComponent},
  {path:'post',component:SuccesfullComponent},


  {path:'continue',component:AboutusComponent}
  
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
