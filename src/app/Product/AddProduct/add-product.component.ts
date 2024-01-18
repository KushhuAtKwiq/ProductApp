import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private ProductService: ProductService) {}

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    brand: new FormControl(''),
    quantity: new FormControl(0),
    usage: new FormControl(false),
  });

  submitForm() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;

      this.ProductService.postData(formData).subscribe(
        (response) => {
          alert('Data submitted successfully');
          this.clearForm();
        },
        (error) => {
          console.error('Error submitting form data:', error);
        }
      );
    } else {
      alert('Provide valid details');
      console.error('Form is not valid');
    }
  }
  clearForm() {
    this.productForm.reset();
  }
}
