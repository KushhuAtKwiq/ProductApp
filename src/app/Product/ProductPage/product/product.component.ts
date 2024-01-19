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
export class ProductComponent   {
  data: any;
  currProduct: Product;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {
    this.loadData();
  }

  loadData() {
    let id: number = 0;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });
    this.ProductService.getProductData(id).subscribe({
      next: (data) => (this.data = data),

      error: (error) => {
        return console.log(error);
      },
      
      complete: () => {
        if (!this.data) {
          console.warn('no Product exist!');
          return;
        }
        console.log(this.data);
        this.currProduct = new Product().add(
          this.data.id,
          this.data.Name,
          this.data.Price,
          this.data.Description,
          this.data.Brand,
          this.data.Quantity,
          this.data.Usage,
          this.data.Rating
        );
        console.log(this.currProduct);
      },
    });
  }
}
