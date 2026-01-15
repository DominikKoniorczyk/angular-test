import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  detail = {
    "name": "Gaming Maus",
    "description": "Eine hochwertige Gaming Maus mit programmierbaren Tasten und RGB-Beleuchtung.",
    "specs": "DPI: 16000, Gewicht: 120g, Anschluss: USB-C, Tasten: 8 programmierbare Tasten",
    "stock": 120,
    "price": 59.99
  }

  deleteDetail(){
    this.detail.name = "";
  }
}
