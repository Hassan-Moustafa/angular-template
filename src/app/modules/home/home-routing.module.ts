import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeControllerComponent } from './pages/home-controller/home-controller.component';
import { BotsListComponent } from './pages/bots-list/bots-list.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';


const homeRoutes: Routes = [
  {
    path: '' , component: HomeControllerComponent, children: [
      {
        path: '', component: ProductsListComponent
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
