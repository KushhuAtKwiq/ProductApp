import { Routes } from '@angular/router';
import { ProductGroupListComponent } from './ProductList/product-group-list/product-group-list.component';
import { ProductComponent } from './ProductPage/product/product.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'products',
    component: AppComponent,
    children: [
      { path: '', component: ProductGroupListComponent },
      { path: ':id', component: ProductComponent },
    ],
  },
  //   {
  //     path: 'create-your-product',
  //     component: NewProduct,
  //   },
];
