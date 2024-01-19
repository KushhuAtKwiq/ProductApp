import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../model/Product';
import { ProductService } from '../../../Service/product.service';

/**
 * iterates through input array
 * creates UI
 * @param product
 */
@Component({
  selector: 'list-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
  providers: [ProductService],
})
export class ListProductComponent {
  @Output() addToCartEvent = new EventEmitter<Product>();
  @Input() product: Product;

  constructor(private ProductService: ProductService) {}

  
  add() {
    this.addToCartEvent.emit(this.product);
  }
}
