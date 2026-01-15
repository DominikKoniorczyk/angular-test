import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  list = [
    {
      "name": "Gaming Maus",
      "description": "Eine hochwertige Gaming Maus mit programmierbaren Tasten und RGB-Beleuchtung.",
      "specs": "- DPI: 16000\n- Gewicht: 120g\n- Anschluss: USB-C\n- Tasten: 8 programmierbare Tasten",
      "stock": 120,
      "price": 59.99
    }
  ];
}
