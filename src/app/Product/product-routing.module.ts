import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGroupListComponent } from './ProductList/product-group-list/product-group-list.component';
import { ProductComponent } from './ProductPage/product/product.component';
import { AddProductComponent } from './AddProduct/add-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductGroupListComponent,
    // children: [
    //   { path: 'add', component: AddProductComponent },
    //   { path: ':id', component: ProductComponent },
    // ],
  },
  {
    path: 'add',
    component: AddProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: ProductCartComponent,
    pathMatch: 'full',
  },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
