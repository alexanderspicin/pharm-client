import { Component, DoCheck, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Bucket } from 'src/app/models/Bucket';
import { BucketService } from 'src/app/services/bucket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  bucket: Bucket
  constructor(private bucketService:BucketService, private auth: AuthService,private router: Router, private notific: NotificationService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('username') != null){
      this.getUserBucket()
    }
  }
  
  authChecker(): boolean{
    if (sessionStorage.getItem('username') != null){
      return true
    }
    return false
  }

  doLogout(): void{
    this.auth.logout()
    sessionStorage.clear()
    this.notific.showSnackBar("Success logout");
    this.router.navigate(["home"])
    window.location.reload()
  }

  toPage(url:string):void{
    this.router.navigate([url])
  }
  
  getUserBucket():void{
    let resp = this.bucketService.getcurrentBucket();
    resp.subscribe(data=>{
      this.bucket = data
      console.log('bucket',this.bucket);
      
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar("Wrong username or password");
    });
  }
}
