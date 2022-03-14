import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({ 
    name: 'filterAll'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Product>, searchText: any): any {
    if(!searchText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data,searchText)); 
  }

  matchValue(data: any , value: any) {
    return Object.keys(data).map((key) => {
       return new RegExp(value, 'gi').test(data["productName"]);
    }).some(result => result);
  }
 }