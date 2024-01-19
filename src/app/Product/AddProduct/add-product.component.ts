import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { catchError, finalize, of } from 'rxjs';

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
    Name: new FormControl(undefined),
    Price: new FormControl(0),
    Description: new FormControl(undefined),
    Brand: new FormControl(undefined),
    Quantity: new FormControl(0),
    Usage: new FormControl(true),
    Rating: new FormControl(0),
  });

  submitForm() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      console.log(...[this.productForm.value]);

      this.ProductService.postData(formData).subscribe((response) => {
        if (response !== null) {
          alert('Data submitted successfully');
          this.productForm.reset();
        } else {
          alert('Error submitting form data. Please try again.');
        }
      });
    } else {
      alert('Provide valid details');
      console.error('Form is not valid');
    }
  }

  clearForm() {
    this.productForm.reset();
  }
}
