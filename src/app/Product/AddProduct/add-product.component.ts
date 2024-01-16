import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    brand: new FormControl(''),
    quantity: new FormControl(0),
    usage: new FormControl(false),
  });

  constructor() {
    console.log(this.productForm.value);
  }
}
