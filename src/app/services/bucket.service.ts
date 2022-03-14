import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
const BUCKET_API = 'http://localhost:8080/buckets/'
@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private httpclient: HttpClient) { }

  getcurrentBucket(): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(BUCKET_API + 'myBucket', {headers, responseType: 'json',})
  }

  addProductToBucket(productId: number): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(BUCKET_API + 'add/' + productId, {headers, responseType: 'text',})
  }

  deleteOneProductFromBucket(productId: number): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.delete(BUCKET_API + productId + '/remove', {headers, responseType: 'text',})
  }

  deleteAllProductFromBucket(productId: number): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.delete(BUCKET_API + productId + '/removeAll', {headers, responseType: 'text',})
  }
}
