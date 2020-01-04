import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../core/services/product.service';
import { PaginatorSettings } from '../../../../../shared/models/paginator-settings';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsData = [];
  columns = [];
  paginatorSettings: PaginatorSettings;

  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.paginatorSettings = new PaginatorSettings();
    this.paginatorSettings.length = this.productsService.getAllDataLength();
    this.paginatorSettings.pageSizeOptions = [3, 5, 10, 15, 20]; 
    this.paginatorSettings.pageSize = 3;
    
    this.productsData = this.productsService.getPaginatedData(1, this.paginatorSettings.pageSize);
    this.columns = this.productsService.getDataTable().columns;
  }

  loadPaginatedData(event) {
    this.productsData = this.productsService.getPaginatedData(event.pageIndex+1, event.pageSize);
  }

}
