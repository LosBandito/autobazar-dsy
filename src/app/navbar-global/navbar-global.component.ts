import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-global',
  templateUrl: './navbar-global.component.html',
  styleUrls: ['./navbar-global.component.css']
})
export class NavbarGlobalComponent {
      constructor(private router: Router) {
      }

      login(){
        this.router.navigateByUrl('/login');
      }
}
