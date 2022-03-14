import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const AUTH_API= 'http://localhost:8080/';

const REGISTER_API= 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  public login(username: any, password: any): Observable<any>{
    const headers=new HttpHeaders({Authorization: 'Basic ' + btoa(username + ":"+ password)})
    return this.httpclient.get(AUTH_API, {headers,responseType:'text' as 'json'})
      
    }
  
  public logout(): Observable<any>{
      return this.httpclient.get(AUTH_API + 'logout')
        
    }

  public register(username:any,firstname:any,lastname:any,password:any,matchingPassword:any,email:any,): Observable<any>{
    return this.httpclient.post(REGISTER_API + 'new', {
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      matchingPassword: matchingPassword,
      email: email
    },{responseType: 'text'})
  }
}
