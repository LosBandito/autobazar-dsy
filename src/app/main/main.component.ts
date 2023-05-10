import {Component, OnInit} from '@angular/core';
// @ts-ignore
import data from "../data/data.json"
import {Router} from "@angular/router";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnInit{


  constructor(private router: Router) {
    this.modalStates = new Array(this.data.length).fill(false);
  }
  title = 'AngularDalsieTesty';
  data = data;


  displayStyle = "none";
  modalStates: boolean[];

  ngOnInit(): void {
    console.log('data:', this.data);
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

  searchTerm = '';
  filteredData: any[] = [];

  filterCars() {
    console.log('fakt to ide bracho')
    this.filteredData = this.data.filter((item: any[]) =>
      item[0].toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  buyItem(item: any) {
    console.log("Click on item")
    this.router.navigate(['buy'], { queryParams: { name: item[0], price: item[1] } });    }


}
