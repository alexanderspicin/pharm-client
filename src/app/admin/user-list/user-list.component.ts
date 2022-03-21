import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;
  activeMethod: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private notific: NotificationService, private adminService: AdminService ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  changeActiveMethod(met: string) {
    this.activeMethod = met;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  
  getAllUsers():void{
    let resp = this.adminService.getAllUsers();
    resp.subscribe(data=>{
      this.users = data
      this.changeActiveMethod('user-list');
      console.log('users',data);
      
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
    });
  }

  deleteUser(id:number):void{
    let resp = this.adminService.deleteUser(id);
    resp.subscribe(data=>{
      console.log(data);
      this.notific.showSnackBar(data)
      this.getAllUsers();
      
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      this.notific.showSnackBar(error.message);
    });
  }
}
