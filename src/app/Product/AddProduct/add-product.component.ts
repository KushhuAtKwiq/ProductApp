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
    name: new FormControl(undefined),
    price: new FormControl(undefined),
    description: new FormControl(undefined),
    brand: new FormControl(undefined),
    quantity: new FormControl(undefined),
    usage: new FormControl(undefined),
  });

  submitForm() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;

      this.ProductService.postData(formData)
        .pipe(
          catchError((error) => {
            console.error('Error submitting form data:', error);
            return of(null);
          }),
          finalize(() => {
            this.clearForm();
          })
        )
        .subscribe((response) => {
          if (response !== null) {
            console.log('Data submitted successfully');
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
