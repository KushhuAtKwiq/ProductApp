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
    console.log(this.ProductService.getBrandName());
    this.sortByRating(true);
  }

  addProduct() {
    this.ProductService.addNewProduct = this.p;
  }

  sortByPrice(type: boolean) {
    // true - low to hight
    // false - high to low
    this.products = type
      ? this.products.sort((a, b) => a.price - b.price)
      : this.products.sort((a, b) => b.price - a.price);
  }
  sortByRating(type: boolean) {
    // false - low to hight
    // true - high to low
    this.products = type
      ? this.products.sort((a, b) => b.rating - a.rating)
      : this.products.sort((a, b) => a.rating - b.rating);
  }
  sortByUsage(type: boolean) {
    // true - outdoor
    // false - indoor
    this.products = type
      ? this.products.filter((i) => i.usage == true)
      : this.products.filter((i) => i.usage == false);
  }
  sortByBrand(name: string) {
    this.products = this.products.filter((item) => item.brand == name);
  }
}
