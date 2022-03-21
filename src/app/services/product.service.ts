import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const PRODUCT_API = 'http://localhost:8080/products/'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  constructor(private httpclient: HttpClient) { }

  getAllProducts(): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.get(PRODUCT_API + "getAllProducts", {headers, responseType: 'json'})
  }

  getimage(id: number): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.get("http://localhost:8080/products/" + id +"/image/download", {headers,responseType: 'blob'})
      
  }

  getProduct(id:number): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.get(PRODUCT_API + id, {headers, responseType: 'json'})
  }

  getProductByName(name:string): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.get(PRODUCT_API + 'get/' + name, {headers, responseType: 'json'})
  }

  getAllProductsByCategory(title:string): Observable<any> {
    const headers=new HttpHeaders()
    return this.httpclient.post(PRODUCT_API + "getProductByCategory",{'title':title}, {headers, responseType: 'json'})
  }
}
