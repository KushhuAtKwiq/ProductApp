import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
})
export class ProductModule {}
