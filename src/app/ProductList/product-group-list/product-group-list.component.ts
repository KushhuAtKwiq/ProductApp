import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../model/Product';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

/**
 * Component shows list of items and loops items of products
 */

@Component({
  selector: 'app-product-group-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ListProductComponent,
    FilterComponent,
  ],
  templateUrl: './product-group-list.component.html',
  styleUrl: './product-group-list.component.css',
  providers: [ProductService],
})
export class ProductGroupListComponent {
  productsTemp: Product[];
  products: Product[];
  brandName: string[];
  isFilterActive: boolean;

  // dependency injection
  constructor(private ProductService: ProductService) {
    // using getter to load all data
    this.productsTemp = this.products = this.ProductService.getProducts;
    this.brandName = ProductService.getBrandNames;
  }

  /**
   * Sorts by Product Price
   *
   * @param type
   * false - low to hight
   * true - high to low
   */
  sortByPrice(type: string) {
    if (type == 'default') return;

    this.isFilterActive = true;
    this.products =
      type == 'true'
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
  sortByRating(type: string) {
    if (type == 'default') return;
    this.isFilterActive = true;
    this.products =
      type == 'true'
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
  sortByUsage(type: string) {
    if (type == 'default') return;
    this.isFilterActive = true;
    this.products =
      type == 'true'
        ? this.productsTemp.filter((i) => i.usage == true)
        : this.productsTemp.filter((i) => i.usage == false);
  }

  sortByBrand(name: string) {
    if (name == 'default') return;

    this.products = this.products.filter((item) => item.brand == name);
  }

  checkDefault(name: string): boolean {
    if (name != 'default') return false;

    this.products = this.productsTemp;

    console.log(name);
    return true;
  }

  clearFilter() {
    this.products = this.productsTemp;
    this.isFilterActive = false;
    console.log(this.ProductService.getProducts);
  }
}
