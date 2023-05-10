import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy-detail',
  templateUrl: './buy-detail.component.html',
  styleUrls: ['./buy-detail.component.css']
})
export class BuyDetailComponent implements OnInit {
  name: string | undefined;
  price: number | undefined;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams['name'];
    this.price = this.route.snapshot.queryParams['price'];
  }


  showSuccessAlert = false;

  showAlert() {
    this.showSuccessAlert = true;
  }

  closeAlert() {
    this.showSuccessAlert = false;
  }

  return(){
    this.router.navigate(['']); // navigate to the default route
  }

}
