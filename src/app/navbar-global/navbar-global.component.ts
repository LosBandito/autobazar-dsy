import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-global',
  templateUrl: './navbar-global.component.html',
  styleUrls: ['./navbar-global.component.css']
})
export class NavbarGlobalComponent implements OnInit{
  displayname: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) {
      this.displayname = username;
    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/login');
  }

}
