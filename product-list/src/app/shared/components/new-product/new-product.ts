import { Component, inject } from '@angular/core';
import { Product, Products } from '../../../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './new-product.html',
  styleUrl: './new-product.scss',
})
export class NewProduct { 
  private router = inject(Router);
  private url = inject(ActivatedRoute);

  constructor(
    private products: Products,
  ) { };

  ngOnInit(): void {
    let currentName = this.url.snapshot.paramMap.get('name'); // Get the 'id' parameter from the route (link: /detail/:id)
    if(currentName) {
      const product = this.products.items.find(item => item.name === currentName);
      if(product) {
        (document.getElementById('product-name') as HTMLInputElement).value = product.name;
        (document.getElementById('description') as HTMLInputElement).value = product.description;
        (document.getElementById('stock') as HTMLInputElement).value = product.stock.toString();
        (document.getElementById('price') as HTMLInputElement).value = product.price.toString();
      }
    }
  };

  addProduct() {
    const newProduct: Product = {
      name: (document.getElementById('product-name') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement).value,
      specs: "",
      stock: parseInt((document.getElementById('stock') as HTMLInputElement).value, 10),
      price: parseFloat((document.getElementById('price') as HTMLInputElement).value),
    };
    this.products.addItem(newProduct);
    this.router.navigate(['/']);
  };
}