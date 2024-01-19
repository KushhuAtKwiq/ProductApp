import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent implements OnInit {
  cartData: Product[];
  ngOnInit(): void {
    // this.cartData = JSON.parse(
    localStorage.getItem('cart');
    // );
  }
}
