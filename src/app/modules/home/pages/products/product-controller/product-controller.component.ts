import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-controller',
  templateUrl: './product-controller.component.html',
  styleUrls: ['./product-controller.component.scss']
})
export class ProductControllerComponent implements OnInit {

  isProductFormVisible = false;
  constructor() { }

  ngOnInit() {
  }

  openProductForm(){
    this.isProductFormVisible = true;
  }

  closeProductForm() {
    console.log('dsadsadsadadsa')
    this.isProductFormVisible = false;
  }

}
