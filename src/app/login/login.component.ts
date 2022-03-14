import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message: string;
  
  constructor(private service:AuthService, private router:Router, private notific: NotificationService) { }
  ngOnInit(): void {
  }
  
  doLogin(){
    console.log(this.username);
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data=>{
      sessionStorage.setItem("username", this.username)
      sessionStorage.setItem("password", this.password)
      this.router.navigate(["home"]).then(() =>{
        window.location.reload()
      })
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar("Wrong username or password");
    });
  }
}
