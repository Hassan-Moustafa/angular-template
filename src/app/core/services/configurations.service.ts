import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import guid from 'angular-uid';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  private configurationsData: any[] = [
    {_id: 1, key: 'config 1', value: 'abc', productId: '1', envId: '2'},
    {_id: 2, key: 'API', value: 'abc', productId: '1', envId: '2'},
    {_id: 3, key: 'Lithium', value: 'abc', productId: '1', envId: '2'},
    {_id: 4, key: 'Beryllium', value: 'abc', productId: '1', envId: '2'},
    {_id: 5, key: 'Boron', value: 'abc', productId: '1', envId: '2'},
    {_id: 6, key: 'Carbon', value: 'abc', productId: '1', envId: '2'},
    {_id: 7, key: 'Nitrogen', value: 'abc', productId: '1', envId: '2'},
    {_id: 8, key: 'Oxygen', value: 'abc', productId: '1', envId: '2'},
    {_id: 9, key: 'Fluorine', value: 'abc', productId: '1', envId: '2'},
    {_id: 10, key: 'Neon', value: 'abc', productId: '1', envId: '2'}
  ];

  private dataChanged = new Subject();

  /**
   * getAllDataLength
   */
  public getAllDataLength() {
    return this.configurationsData.length;
  }

  /**
   * getPaginatedData
   */
  public getPaginatedData(pageNumber: number, pageSize: number) {
    let filteredData = [];

    let startIndex: number = ( ( pageNumber - 1 ) * pageSize );
    // startIndex = startIndex >= this.productsData.length ? 
    //             ( ( pageNumber - 2 ) * pageSize ) : startIndex;

    let endIndex = startIndex + pageSize;
    endIndex = endIndex > this.configurationsData.length ? 
               this.configurationsData.length : endIndex;
    for(let i = startIndex; i < endIndex ; i++) {
      filteredData.push(this.configurationsData[i]);
    }
    return filteredData;
  }

  /**
   * onDataChanged
   */
  public onDataChanged() {
    return this.dataChanged;
  }

  public addNewProduct(newProduct) {
    this.configurationsData.push({
      _id: guid(),
      ... newProduct
    });
    this.dataChanged.next();
  }

  public removeProduct(id) {
    this.configurationsData = this.configurationsData.filter((item) => item._id !== id);
    this.dataChanged.next();
  }

  public updateProduct(productData) {
    let index = this.configurationsData.findIndex((item) => item._id === productData._id);
    if(index !== -1) {
      this.configurationsData[index] = {
        ... this.configurationsData[index],
        ... productData
      }
      this.dataChanged.next();
    }
  }

}
