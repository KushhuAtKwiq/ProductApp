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
  productsItrator: Product[];
  products: Product[];
  brandName: string[];

  // dependency injection
  constructor(private ProductService: ProductService) {
    // using getter to load all data
    this.productsItrator = this.products = this.ProductService.getProducts;
    this.brandName = Array.from(new Set(ProductService.getBrandNames));
  }

  /**
   * Sorts by Product Price
   *
   * @param type
   * false - low to hight
   * true - high to low
   */
  sortByPrice(type: boolean) {
    this.productsItrator = type
      ? this.products.sort(
          (productA, productB) => productA.price - productB.price
        )
      : this.products.sort(
          (productA, productB) => productB.price - productA.price
        );
  }

  /**
   * Sorts by Product Rating
   *
   * @param type
   * false - low to hight
   * true - high to low
   */
  sortByRating(type: boolean) {
    this.productsItrator = type
      ? this.products.sort(
          (productA, productB) => productB.rating - productA.rating
        )
      : this.products.sort(
          (productA, productB) => productA.rating - productB.rating
        );
  }

  /**
   * Sorts by Product Usage
   *
   * @param type
   * true - outdoor
   * false - indoor
   */
  sortByUsage(type: boolean) {
    this.productsItrator = type
      ? this.products.filter((i) => i.usage == true)
      : this.products.filter((i) => i.usage == false);
  }

  sortByBrand(name: string) {
    if (name == 'default') {
      this.productsItrator = this.products;
      return;
    }
    this.productsItrator = this.products.filter((item) => item.brand == name);
  }

  changePrice() {}
}
