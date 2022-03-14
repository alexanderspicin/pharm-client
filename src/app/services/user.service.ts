import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
const USER_API = 'https://spicin-pharmacy.herokuapp.com/users/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  getUserById(id: number): Observable<any>{
    return this.httpclient.get(USER_API + id)
  }

  getCurrentUser(): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.get(USER_API, {headers})
  }

  updateUser(user: any): Observable<any>{
    const headers=new HttpHeaders().set('Authorization', `Basic ${btoa(sessionStorage.getItem('username')+':'+sessionStorage.getItem('password'))}`)
    return this.httpclient.put(USER_API+ 'update',user, {headers, responseType: 'text'})
  }
}
