import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeControllerComponent } from './pages/home-controller/home-controller.component';
import { ProductControllerComponent } from './pages/products/product-controller/product-controller.component';
import { ConfigurationsControllerComponent } from './pages/configurations/configurations-controller/configurations-controller.component';


const homeRoutes: Routes = [
  {
    path: '' , component: HomeControllerComponent, children: [
      {
        path: 'products', component: ProductControllerComponent
      },
      {
        path: 'configurations', component: ConfigurationsControllerComponent
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
