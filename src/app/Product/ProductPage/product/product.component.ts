import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  currProduct: Product | undefined;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {
    setTimeout(() => {
      console.log(this.ProductService.ProductData[0]);
    }, 1000);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const ID: number = params['id'];
      this.currProduct = this.ProductService.getProduct(ID);
    });

    // if given product id does not exist
    if (!this.currProduct) {
      console.warn('no Product exist!');
      return;
    }
  }
}
