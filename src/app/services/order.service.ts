import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"


const ORDER_API = 'http://localhost:8080/orders/'
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  
  constructor(private httpclient: HttpClient) { }

  createOrder(): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(ORDER_API + "createOrder", {headers, responseType: 'text'})
  }

  getOrders(): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(ORDER_API + "myOrders", {headers, responseType: 'json'})
  }

  getOrder(id: number): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(ORDER_API + id, {headers, responseType: 'json'})
  }
}