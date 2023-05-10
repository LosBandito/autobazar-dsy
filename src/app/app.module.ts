import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { BuyDetailComponent } from './buy-detail/buy-detail.component';
import { MainComponent } from './main/main.component';
import { NavbarGlobalComponent } from './navbar-global/navbar-global.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    BuyDetailComponent,
    MainComponent,
    NavbarGlobalComponent,
    LandingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
