import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../../../products';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  items;
  
  constructor(
      private service: Products,
    ) {
      this.items = this.service.items;
    }
}
