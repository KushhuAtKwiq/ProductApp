import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../model/Product';
import { Perform } from '../../../model/perform.class';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  data = new Perform<any>();
  currProduct: Product;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
      this.data.load(this.ProductService.getProduct(id));
    });

    // if given product id does not exist
    setTimeout(() => {
      if (!this.data.products) {
        console.warn('no Product exist!');
        return;
      }
      console.log(this.data.products);
      if (this.data.products)
        this.currProduct = new Product().add(
          this.data.products.id,
          this.data.products.name,
          this.data.products.price,
          this.data.products.description,
          this.data.products.brand,
          this.data.products.quantity,
          this.data.products.usage,
          this.data.products.rating
        );

      // console.log(this.currProduct);
    }, 1000);
  }

  getID() {}
}
