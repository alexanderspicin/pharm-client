import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { BucketService } from '../services/bucket.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;

  product: Product;

  constructor(private productService: ProductService, private activatedRoute : ActivatedRoute,private notific: NotificationService, private bucketService: BucketService) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = Number(data['id']);
      this.getProductById(this.id)
    })
  }

  getProductById(id:any): void{
    var resp =this.productService.getProduct(id);
    console.log(resp);
    
    resp.subscribe(data=>{
      console.log(data);
      this.product = data;
      console.log(this.product.categories);
      
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.error);
        console.log(error.message);
      
    });
  }
  
  authChecker(): boolean{
    if (sessionStorage.getItem('username') != null){
      return true
    }
    return false
  }

  addToBucket(productId:number):void{
    if (!this.authChecker()){
      this.notific.showSnackBar("You are not authorized");
    }else{
      var resp = this.bucketService.addProductToBucket(productId);
      resp.subscribe(data=>{
        console.log(data);
        
        this.notific.showSnackBar(data);
      },(error:HttpErrorResponse)=>{
        console.log(error.error);
        console.log(error.message);
        this.notific.showSnackBar(error.message);
      })
    }
  }

}
