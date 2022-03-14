import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  "username": string;
  "firstname": string;
  "lastname": string;
  "password": string;
  "matchingPassword": string;
  "email": string;
  constructor(private service:AuthService, private router:Router, private notific: NotificationService) { }

  ngOnInit(): void {
  }

  register(): void {
    let resp = this.service.register(this.username, this.firstname,this.lastname,this.password,this.matchingPassword,this.email);
    resp.subscribe(data=>{
      console.log(this.username);
      this.router.navigate(["login"])
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.error);
    });
  }
}
