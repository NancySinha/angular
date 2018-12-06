import { RestapicomponentService } from './../services/restapicomponent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userservive: RestapicomponentService) { }
  alldata: any
  ngOnInit() {
    this.getAllproducts()
  }

  getAllproducts() {
    this.userservive.getAllproducts().subscribe((Data) => {
      this.alldata = Data
    })
  }
}
