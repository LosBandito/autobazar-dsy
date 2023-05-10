import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private http: HttpClient) {
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
      console.log(name,password)
      this.http.post('http://localhost:5000/users', { username: name, password: password }).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    } else {
      console.log('Form is not valid!');
    }
  }

  login(formValue: any): void {
    console.log("click")
    const username = formValue.username;
    const password = formValue.password;
    this.http.post('http://localhost:5000/login', { username, password }).subscribe(
      response => {
        console.log(response)
        localStorage.setItem('username', username);
        console.log('Username saved to localStorage');
      },
      error => {
        console.log(error);
      }
    );
  }



}
