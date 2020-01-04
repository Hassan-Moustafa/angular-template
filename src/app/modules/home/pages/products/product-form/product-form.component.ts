import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  @Output()
  dataSaved = new EventEmitter<void>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  getValidationMessage(field: string, fieldAsText: string){
    if(this.productForm.get(field).hasError('required')) {
        return `${fieldAsText} is required`;
    } else if(this.productForm.get(field).hasError('email')) {
        return `${fieldAsText} must be a valid email`;
    } else if (this.productForm.get(field).hasError('invalidNumber')) {
        return `${fieldAsText} must be a valid number`;
    }
  }

  onSubmit() {
    this.productService.addNewProduct(this.productForm.value);
    this.dataSaved.emit();
  }
}
