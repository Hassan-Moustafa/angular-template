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
import { ConfigurationsControllerComponent } from './pages/configurations/configurations-controller/configurations-controller.component';
import { ConfigurationsListComponent } from './pages/configurations/configurations-list/configurations-list.component';
import { ConfigurationsFormComponent } from './pages/configurations/configurations-form/configurations-form.component';


@NgModule({
  declarations: [HomeControllerComponent, BotsListComponent, ProductsListComponent, ProductFormComponent, ProductControllerComponent, NameColumnComponent, ConfigurationsControllerComponent, ConfigurationsListComponent, ConfigurationsFormComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  entryComponents: [NameColumnComponent],
  exports: [SharedModule],
})
export class HomeModule { }
