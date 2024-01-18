import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../Service/product.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
  providers: [ProductService],
})
export class ProductModule {}
