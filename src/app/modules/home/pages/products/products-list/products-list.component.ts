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
  columns: any[] = [
    {
      prop: '_id',
      displayText: 'Id',
    },
    {
      prop: 'name',
      displayText: 'Name'
    }
  ];
  paginatorSettings: PaginatorSettings;

  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.paginatorSettings = new PaginatorSettings(
      this.productsService.getAllDataLength(), 3, [3, 5, 10, 15, 20], 0 );
    
    this.productsData = this.productsService.getPaginatedData(1, this.paginatorSettings.pageSize);
    this.productsService.onDataChanged().subscribe(() => {
      this.productsData = this.productsService.getPaginatedData(this.paginatorSettings.pageIndex+1, this.paginatorSettings.pageSize);
      this.paginatorSettings.setPaginatorSettings(this.productsService.getAllDataLength());
    });
  }

  loadPaginatedData(event) {
    this.productsData = this.productsService.getPaginatedData(event.pageIndex+1, event.pageSize);
    this.paginatorSettings.setPaginatorSettings(null, event.pageSize, null, event.pageIndex);
  }

}
