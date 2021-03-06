import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { LandingComponent } from './landing/landing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SuccesfullComponent } from './succesfull/succesfull.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginComponent,
    MainPageComponent,
    NavComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ContentpageComponent,
    LandingComponent,
    AboutusComponent,
    SuccesfullComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
