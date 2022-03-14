import { Component, OnInit } from '@angular/core';
import { BucketService } from '../services/bucket.service';
import { ProductService } from '../services/product.service';
import { Bucket } from '../models/Bucket';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
import {User} from '../models/User';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  user: User;
  bucket: Bucket;

  constructor(private orderService:OrderService, private bucketService: BucketService, private productService: ProductService,private notific: NotificationService, private userService:UserService) { }

  ngOnInit(): void {
    this.getUserBucket()
    this.getUser()
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

  getUser(): void{
    let resp = this.userService.getCurrentUser();
    resp.subscribe(data=>{
      this.user = data
      console.log(data);
      
    }, (error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.message);
  })
  }

  addToBucket(productId:number):void{
    var resp = this.bucketService.addProductToBucket(productId);
    resp.subscribe(data=>{
      console.log(data);
      this.notific.showSnackBar(data);
      this.getUserBucket()
    },(error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.message);
    })
  }

  deleteOneFromBucket(productId:number):void{
    var resp = this.bucketService.deleteOneProductFromBucket(productId);
    resp.subscribe(data=>{
      console.log(data);
      this.notific.showSnackBar(data);
      this.getUserBucket()
    },(error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.message);
    })
  }

  deleteAllFromBucket(productId:number):void{
    var resp = this.bucketService.deleteAllProductFromBucket(productId);
    resp.subscribe(data=>{
      console.log(data);
      this.notific.showSnackBar(data);
      this.getUserBucket()
    },(error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.message);
    })
  }

  create_order():void{
    var resp = this.orderService.createOrder();
    resp.subscribe(data=>{
      console.log(data);
      this.notific.showSnackBar(data);
      this.getUserBucket()
    },(error:HttpErrorResponse)=>{
      console.log(error.error);
      console.log(error.message);
      this.notific.showSnackBar(error.error);
    })
  }

}
