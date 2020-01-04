import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../../core/services/product.service';

@Component({
  selector: 'app-configurations-form',
  templateUrl: './configurations-form.component.html',
  styleUrls: ['./configurations-form.component.scss']
})
export class ConfigurationsFormComponent implements OnInit {

  productForm: FormGroup;

  @Output()
  dataSaved = new EventEmitter<void>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      key: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
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
