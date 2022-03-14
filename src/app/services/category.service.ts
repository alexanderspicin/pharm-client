import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const CATEGORY_API = 'https://spicin-pharmacy.herokuapp.com/category/'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private httpclient: HttpClient) { }

  getCategory(): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.get(CATEGORY_API + 'getAll', {headers, responseType: 'json'})
  }

}
