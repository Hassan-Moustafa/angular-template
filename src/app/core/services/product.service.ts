import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import guid from 'angular-uid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsData: any[] = [
    {_id: 1, name: 'Hydrogen'},
    {_id: 2, name: 'Helium'},
    {_id: 3, name: 'Lithium'},
    {_id: 4, name: 'Beryllium'},
    {_id: 5, name: 'Boron'},
    {_id: 6, name: 'Carbon'},
    {_id: 7, name: 'Nitrogen'},
    {_id: 8, name: 'Oxygen'},
    {_id: 9, name: 'Fluorine'},
    {_id: 10, name: 'Neon'}
  ];

  private dataChanged = new Subject();

  /**
   * getAllDataLength
   */
  public getAllDataLength() {
    return this.productsData.length;
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
    endIndex = endIndex > this.productsData.length ? 
               this.productsData.length : endIndex;
    for(let i = startIndex; i < endIndex ; i++) {
      filteredData.push(this.productsData[i]);
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
    this.productsData.push({
      _id: guid(),
      ... newProduct
    });
    this.dataChanged.next();
  }

  public removeProduct(id) {
    this.productsData = this.productsData.filter((item) => item._id !== id);
    this.dataChanged.next();
  }

  public updateProduct(productData) {
    let index = this.productsData.findIndex((item) => item._id === productData._id);
    if(index !== -1) {
      this.productsData[index] = {
        ... this.productsData[index],
        ... productData
      }
      this.dataChanged.next();
    }
  }

}
