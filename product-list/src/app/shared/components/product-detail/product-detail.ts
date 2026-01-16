import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-detail',
  imports: [ProductList],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    let currentName = this.route.snapshot.paramMap.get('name'); // Get the 'id' parameter from the route (link: /detail/:id)
    if(currentName) this.detail.name = currentName;
  }
  
  detail = {
    "name": "",
    "description": "",
    "specs": "",
    "stock": "",
    "price": ""
  }

  deleteDetail(){
    this.detail.name = "";
  }

  constructor() {
  }
}
