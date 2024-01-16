import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGroupListComponent } from './ProductList/product-group-list/product-group-list.component';
import { ProductComponent } from './ProductPage/product/product.component';
import { AddProductComponent } from './AddProduct/add-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductGroupListComponent,
    children: [
      { path: 'add', component: AddProductComponent, pathMatch: 'full' },
      { path: ':id', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
