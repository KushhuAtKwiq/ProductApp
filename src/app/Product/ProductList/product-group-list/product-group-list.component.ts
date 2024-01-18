import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { Product } from '../../../model/Product';
import { ProductService } from '../../../Service/product.service';
import { HttpClient } from '@angular/common/http';
import { Perform } from '../../../model/perform.class';

/**
 * Component shows list of items and loops items of products
 */

@Component({
  selector: 'product-group-list',
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
export class ProductGroupListComponent implements OnInit {
  productsTemp: Product[];
  products: Product[] = [];
  brandName: string[];
  isFilterActive: boolean;
  ProductData: Object[] = [];
  data = new Perform<Product[]>();

  private baseUrl = 'http://localhost:3000/product';

  comments: any = [];

  // dependency injection
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.data.load(this.ProductService.getData);
    setTimeout(() => {
      if (!this.data.products) return console.warn('data pending');

      this.data.products.map((data: any) => {
        this.ProductService.addNewProduct = new Product().add(
          data.id,
          data.name,
          data.Price,
          data.Description,
          data.Brand,
          data.Quantity,
          data.Usage,
          data.Rating
        );
      });

      // using getter to load all data
      this.productsTemp = this.products = this.ProductService.getProducts;
      this.brandName = this.ProductService.getBrandNames;
      console.log(this.ProductService.getProducts);
    }, 500);
  }
  /**
   * Sorts by Product Price
   *
   * @param type
   * false - low to hight
   * true - high to low
   */
  sortByPrice(type: string | boolean) {
    if (type == 'default') return;

    this.isFilterActive = true;
    this.products = type
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
   *  false - low to high
   *  true - high to low
   */
  sortByRating(type: string | boolean) {
    if (type == 'default') return;
    this.isFilterActive = true;
    this.products = type
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
  sortByUsage(type: string | boolean) {
    if (type == 'default') return;
    this.isFilterActive = true;
    this.products = type
      ? this.productsTemp.filter((product) => product.usage == true)
      : this.productsTemp.filter((product) => product.usage == false);
  }

  sortByBrand(name: string) {
    if (name == 'default') return;

    this.isFilterActive = true;
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
  }
}
