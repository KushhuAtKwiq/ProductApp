import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { ListProductComponent } from '../ProductList/list-product/list-product.component';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ListProductComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent implements OnInit {
  isLoading: boolean;
  cartData: Product[];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.cartData = this.ProductService.getCart;
    console.log(this.cartData);
    this.isLoading = false;
  }

  delete(product: Product) {
    this.ProductService.deleteProductCart(product);
    this.loadData();
    console.log(localStorage.getItem('cart'));
    console.log(this.cartData);
  }
}
