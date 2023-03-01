import { Component } from '@angular/core';
import data from '../data/data.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.modalStates = new Array(this.data.length).fill(false);
  }

  title = 'AngularDalsieTesty';
  data = data;


  displayStyle = "none";
  modalStates: boolean[];

  ngOnInit(): void {
  }

  openPopup(i: number) {
    this.modalStates[i] = true;
  }

  closePopup(i: number) {
    this.modalStates[i] = false;

  }
}


