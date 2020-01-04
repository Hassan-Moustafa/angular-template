import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeControllerComponent } from './pages/home-controller/home-controller.component';
import { ProductControllerComponent } from './pages/products/product-controller/product-controller.component';


const homeRoutes: Routes = [
  {
    path: '' , component: HomeControllerComponent, children: [
      {
        path: '', component: ProductControllerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
