import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  activePage: string;
  constructor(private userService: UserService, private notific: NotificationService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void{
  let resp = this.userService.getCurrentUser();
  resp.subscribe(data=>{
    this.user=data
  }, (error:HttpErrorResponse)=>{
    console.log(error.error);
    console.log(error.message);
    this.notific.showSnackBar(error.message);
  });
  }

  editUser(): void{
    let resp = this.userService.updateUser(this.user);
    resp.subscribe(data=>{
      console.log(data);
      
      this.notific.showSnackBar("User updated");
      if (this.user.password.length != 0){
      sessionStorage.setItem("password", this.user.password)
      }
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.error);
    });
    }

}
