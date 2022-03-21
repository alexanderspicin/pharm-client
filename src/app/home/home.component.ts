import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { Product } from '../models/Product';
import { HttpErrorResponse } from '@angular/common/http';
import { PagerService } from '../heplers/PagerService';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { BucketService } from '../services/bucket.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product>;
  categories: Array<Category>;
  image:any;
  searchString: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  activeCategory: string;
  showCategory: boolean;
  
  constructor(private activatedRoute : ActivatedRoute,private categoryService: CategoryService,private pagerService: PagerService,private sanitizer: DomSanitizer, private auth: AuthService, private productService: ProductService, private router: Router, private notific: NotificationService, private bucketService: BucketService) { }

  ngOnInit(): void {
    this.getCategory()
    this.activatedRoute.params.subscribe(data=>{
      this.activeCategory = data['category'];
    })
    if (String(this.activeCategory)== '' || this.activeCategory == undefined){
      this.getAllProduct()
    }else{
      this.getAllProductByCategoryAfterRedirect(this.activeCategory)
    }
  }

  getAllProductByCategory(title: string): void{
    if(this.activeCategory == title){
      this.activeCategory = '';
      this.getAllProduct();
    }else{
    var resp =this.productService.getAllProductsByCategory(title);
    console.log(resp);
    
    resp.subscribe(data=>{
      console.log(data);
      this.products = data;
      this.activeCategory = title;
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.error);
        console.log(error.message);
      
    });
  }}

  getAllProductByCategoryAfterRedirect(title: string): void{
    var resp =this.productService.getAllProductsByCategory(title);
    console.log(resp);
    
    resp.subscribe(data=>{
      console.log(data);
      this.products = data;
      this.activeCategory = title;
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

  getAllProduct(): void{
    var resp =this.productService.getAllProducts();
    console.log(resp);
    
    resp.subscribe(data=>{
      console.log(data);
      this.products = data;
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.error);
        console.log(error.message);
      
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  getCategory(): void{
    var resp = this.categoryService.getCategory();
    resp.subscribe(data=>{
      this.categories = data;
    })
  }
}
