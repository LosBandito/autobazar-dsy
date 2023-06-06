import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyDetailComponent} from "./buy-detail/buy-detail.component";
import {LoginComponent} from "./login/login.component";
import {LandingComponent} from "./landing/landing.component";
import {MainComponent} from "./main/main.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'buy', component: BuyDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  {path: "main",component: MainComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
