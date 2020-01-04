import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';

import { HomeControllerComponent } from './pages/home-controller/home-controller.component';
import { BotsListComponent } from './pages/bots-list/bots-list.component';
import { CheckboxComponent } from 'src/app/shared/components/UI/checkbox/checkbox.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductControllerComponent } from './pages/products/product-controller/product-controller.component';
import { NameColumnComponent } from './pages/products/products-list/name-column/name-column.component';


@NgModule({
  declarations: [HomeControllerComponent, BotsListComponent, ProductsListComponent, ProductFormComponent, ProductControllerComponent, NameColumnComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  entryComponents: [NameColumnComponent],
  exports: [SharedModule],
})
export class HomeModule { }
