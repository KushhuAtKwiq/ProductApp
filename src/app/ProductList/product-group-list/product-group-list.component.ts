import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../model/Product';

/**
 * Component shows list of items and loops items of products
 */
@Component({
  selector: 'app-product-group-list',
  standalone: true,
  imports: [RouterModule, CommonModule, ListProductComponent],
  templateUrl: './product-group-list.component.html',
  styleUrl: './product-group-list.component.css',
  providers: [ProductService],
})
export class ProductGroupListComponent {
  products: Product[];

  p = new Product().addDetails(
    123,
    'Hui jo bhai',
    20.99,
    'Escape to your private oasis...',
    'Hang Loose Hammocks',
    12,
    true,
    4.9
  );

  // dependency injection
  constructor(private ProductService: ProductService) {
    // using getter to load all data
    this.products = this.ProductService.getProducts;
  }

  addProduct() {
    this.ProductService.addNewProduct = this.p;
  }
}
