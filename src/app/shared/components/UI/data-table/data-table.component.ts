import { Component, OnInit, ViewChildren, QueryList, Input, ComponentFactoryResolver, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LoadComponentDynamicDirective } from 'src/app/shared/directives/load-component-dynamic.directive';
import { PaginatorSettings } from '../../../models/paginator-settings';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input()
  dataSource: any[];

  @Input()
  columns: any[];

  @Input()
  showPaginator: boolean;
  
  @Input()
  paginatorSettings: PaginatorSettings; 

  @Output()
  onPaginatorChanged = new EventEmitter<object>();

  displayedColumns: any[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    // this.onPaginatorChanged = new EventEmitter<object>();

  }

  ngOnInit() {
    this.columns.forEach((column) => {
      this.displayedColumns.push(column.prop);
    });
  }

  onPaginatorChangedHandler(e) {
    this.onPaginatorChanged.emit(e);
  }

}
