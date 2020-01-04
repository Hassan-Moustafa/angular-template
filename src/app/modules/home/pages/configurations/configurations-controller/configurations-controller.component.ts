import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations-controller',
  templateUrl: './configurations-controller.component.html',
  styleUrls: ['./configurations-controller.component.scss']
})
export class ConfigurationsControllerComponent implements OnInit {

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
