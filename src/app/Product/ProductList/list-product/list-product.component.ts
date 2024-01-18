import { Component, Input } from '@angular/core';
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
  @Input() product: Product;

  constructor(private ProductService: ProductService) {}

  add() {
    // this.ProductService.addToCart = this.product;
    // console.log(this.ProductService.getCart);
    console.log('hellop');
  }
}
