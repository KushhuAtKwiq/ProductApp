import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../Service/product.service';
import { Product } from '../../model/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  currProduct: Product | undefined;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const ID = params['id'];
      this.currProduct = this.ProductService.getProduct(ID);
    });

    // if given product id does not exist
    if (!this.currProduct) {
      console.warn('no Product exist!');
      return;
    }
  }
}
