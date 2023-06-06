import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import { Router } from "@angular/router";
import {AuthGuard} from "../auth.guard";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router,private authGuard: AuthGuard) {
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      const name = form.value.name;
      const email = form.value.email;
      const password = form.value.password;
      console.log(name, password)
      this.http.post('http://localhost:5000/users', {username: name, password: password}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    } else {
      console.log('Form is not valid!');
    }
  }


  login(formValue: any): void {
    const username = formValue.username;
    const password = formValue.password;
    this.http.post('http://localhost:5000/login', { username, password }).subscribe(
      response => {
        console.log(response);
        const responseObject = response as { message: string, token: string }; // Type assertion
        if (responseObject.message === 'Login successful') {
          // Store the token in localStorage
          localStorage.setItem('token', responseObject.token);
          console.log('Token saved to localStorage');

          // Store the username in localStorage (optional)
          localStorage.setItem('username', username);
          console.log('Username saved to localStorage');

          // Redirect the user
          console.log('Redirecting...');
          this.router.navigate(['/main']);
        } else {
          console.log('Response: ', response);
          // Handle login failure (e.g., display error message)
        }
      },
      error => {
        console.log(error);
        // Handle error (e.g., display error message)
      }
    );


}






}
