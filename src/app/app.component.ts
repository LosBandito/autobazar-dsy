import { Component } from '@angular/core';
import data from '../data/data.json';
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {
      this.modalStates = new Array(this.data.length).fill(false);
    }
    title = 'AngularDalsieTesty';
    data = data;


    displayStyle = "none";
    modalStates: boolean[];

    ngOnInit(): void {
    }
    redTest(){
      this.router.navigate(["test"])
    }
    openPopup(i: number) {
      this.modalStates[i] = true;
    }

    closePopup(i: number) {
      this.modalStates[i] = false;

    }

    buyItem(item: any) {
      console.log("Click on item")
      this.router.navigate(['buy'], { queryParams: { name: item[0], price: item[1] } });    }


}


