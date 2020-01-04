import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../core/services/product.service';
import { PaginatorSettings } from '../../../../../shared/models/paginator-settings';
import { CheckboxComponent } from '../../../../../shared/components/UI/checkbox/checkbox.component';
import { SvgIconComponent } from '../../../../../shared/components/UI/Icon/icon.component';
import { NameColumnComponent } from '../../products/products-list/name-column/name-column.component';
import { ConfigurationsService } from '../../../../../core/services/configurations.service';

@Component({
  selector: 'app-configurations-list',
  templateUrl: './configurations-list.component.html',
  styleUrls: ['./configurations-list.component.scss']
})
export class ConfigurationsListComponent implements OnInit {

  configurationsData = [];
  columns: any[] = [
    {
      prop: '_id',
      displayText: 'Id',
    },
    {
      prop: 'key',
      displayText: 'Key',
      component: NameColumnComponent,
      props: [
        {
          propName: 'value',
          propValue: 'key',
        }
      ],
      events: [
        {
          eventName: 'valueChanged',
          eventHandler: (e) => this.fieldValueChanged(e, this, 'key')
        }
      ]
    },
    {
      prop: 'value',
      displayText: 'Value',
      component: NameColumnComponent,
      props: [
        {
          propName: 'value',
          propValue: 'value',
        }
      ],
      events: [
        {
          eventName: 'valueChanged',
          eventHandler: (e) => this.fieldValueChanged(e, this, 'value')
        }
      ]
    },
    {
      prop: 'productId',
      displayText: 'Product Id',
    },
    {
      prop: 'envId',
      displayText: 'Environment Id',
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

  constructor(private configService: ConfigurationsService) { }

  ngOnInit() {
    this.paginatorSettings = 
    new PaginatorSettings(this.configService.getAllDataLength(), 3, [3, 5, 10, 15, 20], 0 );
    
    this.configurationsData = this.configService.getPaginatedData(1, this.paginatorSettings.pageSize);
    console.log(this.configurationsData)
    this.configService.onDataChanged().subscribe(() => {
      this.configurationsData = this.configService.getPaginatedData(1, this.paginatorSettings.pageSize);
      this.paginatorSettings.setPaginatorSettings(this.configService.getAllDataLength(), null, null, 0);
    });
  }

  loadPaginatedData(event) {
    this.configurationsData = this.configService.getPaginatedData(event.pageIndex+1, event.pageSize);
    this.paginatorSettings.setPaginatorSettings(null, event.pageSize, null, event.pageIndex);
  }

  rowSelected(event, _this) {
    _this.configService.removeProduct(event.item._id);
  }

  fieldValueChanged(event, _this, field){
    _this.configService.updateProduct({
      _id: event.item._id,
      [field]: event.event
    })
  }

}
