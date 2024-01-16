import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../model/Product';

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
})
export class ListProductComponent {
  @Input() product: Product;
}
