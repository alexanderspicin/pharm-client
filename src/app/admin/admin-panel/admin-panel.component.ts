import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: Array<User>;
  activeMethod: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  categories: Array<Category>;
  constructor(private notific: NotificationService,private router: Router, private adminService: AdminService , private categoryService: CategoryService) { }

  ngOnInit(): void {

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

  checkActiveMethod(title: String): boolean {
    return this.activeMethod == title;
  } 

  getAllCategory():void{
    var resp = this.categoryService.getCategory();
    resp.subscribe(data=>{
      this.categories = data;
      this.changeActiveMethod('category-list');
    })
  }
}
