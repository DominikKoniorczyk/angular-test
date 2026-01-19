import { Routes } from '@angular/router';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { NewProduct } from './shared/components/new-product/new-product';

export const routes: Routes = [
    { path: '', component: ProductList, },
    { path: 'detail/:name', component: ProductDetail, },
    { path: 'addnewproduct', component: NewProduct, },
    { path: 'editproduct/:name', component: NewProduct, },
];
