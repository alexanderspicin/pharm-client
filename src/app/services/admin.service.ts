import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { productCreateForm } from '../models/productCreateFrom';
const ADMIN_API = 'https://spicin-pharmacy.herokuapp.com/admin/'
@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
  
    constructor(private httpclient: HttpClient) { }
  
    getAllUsers(): Observable<any> {
      const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
      return this.httpclient.get(ADMIN_API + 'getAllUsers', {headers})
    }

    deleteUser(id:number): Observable<any> {
      const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
      return this.httpclient.delete(ADMIN_API + 'deleteUser/' + id, {headers,responseType:'text'})
    }

    createProduct(product:productCreateForm): Observable<any> {
      const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
      return this.httpclient.post(ADMIN_API + 'createProduct',product, {headers,responseType:'text'})
    }

    addImgToProduct(file:File, productId:number): Observable<any> {
      const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
      headers.set('Content-type', 'multipart/form-data')
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
      return this.httpclient.post(ADMIN_API + productId + '/uploadImage', formData , {headers,responseType:'text'})
    }

  }
  
