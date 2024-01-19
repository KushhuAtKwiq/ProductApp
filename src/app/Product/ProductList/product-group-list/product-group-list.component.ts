import { CommonModule, NgFor } from '@angular/common';
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
    NgFor,
  ],
  templateUrl: './product-group-list.component.html',
  styleUrl: './product-group-list.component.css',
  providers: [ProductService],
})
export class ProductGroupListComponent {
  productsTemp: Product[];
  products: Product[] = [];
  brandName: string[];
  isFilterActive: boolean;

  isLoading: boolean;
  data: Product[];
  dataLength: number;
  pagination: number[];

  currentPage = 1;
  productsPerPage = 5;

  // dependency injection
  constructor(private ProductService: ProductService) {
    this.ProductService.getLength().subscribe({
      next: (length) => (this.dataLength = length),
      error: (error) => {
        return console.log(error);
      },
      complete: () => {
        this.dataLength = this.dataLength / this.productsPerPage;
        this.pagination = Array(Math.ceil(this.dataLength))
          .fill(0)
          .map((x, i) => i + 1);
      },
    });
    this.loadData();
  }

  loadData(pageNumber?: number) {
    this.isLoading = true;
    if (pageNumber) this.currentPage = pageNumber;
    this.ProductService.getPaginatedItems(
      this.currentPage,
      this.productsPerPage
    ).subscribe({
      next: (data) => (this.data = data),

      error: (error) => {
        return console.log(error);
      },

      complete: () => {
        this.isLoading = false;
        console.log(this.data);
        this.ProductService.deleteAllData();
        this.data.map((data: any) => {
          this.ProductService.addNewProduct = new Product().add(
            data.id,
            data.Name,
            data.Price,
            data.Description,
            data.Brand,
            data.Quantity,
            data.Usage,
            data.Rating
          );
        });
        this.productsTemp = this.products = this.ProductService.getProducts;
        this.brandName = this.ProductService.getBrandNames;
      },
    });
  }

  changePage(direction: 'prev' | 'next') {
    if (direction === 'prev' && this.currentPage > 0) {
      this.currentPage--;
    } else if (
      direction === 'next'
      // &&
      // this.currentPage < this.pagination.length
    ) {
      this.currentPage++;
    }
    this.loadData();
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

  addToCart(product: Product) {
    // if (this.ProductService.getCart.includes(product)) return;
    this.ProductService.addToCart(product);
  }

  showCart() {
    console.log(this.ProductService.getCart);
    console.log(localStorage.getItem('cart'));
  }
}
