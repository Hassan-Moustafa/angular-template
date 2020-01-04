import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../core/services/product.service';
import { PaginatorSettings } from '../../../../../shared/models/paginator-settings';
import { CheckboxComponent } from '../../../../../shared/components/UI/checkbox/checkbox.component';
import { SvgIconComponent } from '../../../../../shared/components/UI/Icon/icon.component';
import { NameColumnComponent } from './name-column/name-column.component';

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
      displayText: 'Name',
      component: NameColumnComponent,
      props: [
        {
          propName: 'value',
          propValue: 'name',
        }
      ],
      events: [
        {
          eventName: 'valueChanged',
          eventHandler: (e) => this.productNameChanged(e, this)
        }
      ]
    },
    {
      prop: 'isSelected',
      displayText: '',
      component: SvgIconComponent,
      props: [
        {
          propName: 'iconName',
          propValue: null,
          default: 'trash'
        },
        {
          propName: 'styleClassName',
          propValue: null,
          default: 'trash-icon'
        },
      ],
      events: [
        {
          eventName: 'iconClicked',
          eventHandler: (e) => this.rowSelected(e, this)
        }
      ]
    },
  ];
  paginatorSettings: PaginatorSettings;
  rowsSelected: any[] = [];

  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.paginatorSettings = 
    new PaginatorSettings(this.productsService.getAllDataLength(), 3, [3, 5, 10, 15, 20], 0 );
    
    this.productsData = this.productsService.getPaginatedData(1, this.paginatorSettings.pageSize);
    this.productsService.onDataChanged().subscribe(() => {
      this.productsData = this.productsService.getPaginatedData(1, this.paginatorSettings.pageSize);
      this.paginatorSettings.setPaginatorSettings(this.productsService.getAllDataLength(), null, null, 0);
    });
  }

  loadPaginatedData(event) {
    this.productsData = this.productsService.getPaginatedData(event.pageIndex+1, event.pageSize);
    this.paginatorSettings.setPaginatorSettings(null, event.pageSize, null, event.pageIndex);
  }

  rowSelected(event, _this) {
    _this.productsService.removeProduct(event.item._id);
  }

  productNameChanged(event, _this){
    _this.productsService.updateProduct({
      _id: event.item._id,
      name: event.event
    })
  }

}
