import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductList } from '../product-list/product-list';
import { Products } from '../../../products';

@Component({
  selector: 'app-product-detail',
  imports: [ProductList],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(
    private service: Products,
  ) {}

  ngOnInit(): void {
    let currentName = this.route.snapshot.paramMap.get('name'); // Get the 'id' parameter from the route (link: /detail/:id)
    if(currentName) {
      this.detail.name = currentName;
      const product = this.service.items.find(item => item.name === currentName);
      if(product) {
        this.detail.description = product.description;
        this.detail.specs = product.specs;
        this.detail.stock = product.stock.toString();
        this.detail.price = product.price.toString();
      }
    }
  };
  
  detail = {
    "name": "",
    "description": "",
    "specs": "",
    "stock": "",
    "price": ""
  }

  deleteDetail(){
    this.service.removeItem(this.detail.name);
    this.router.navigate(['/']);
  }

  editDetail(){
    this.router.navigate(['/editproduct/' + this.detail.name]);
  }
}
