import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { productCreateForm } from 'src/app/models/productCreateFrom';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-product-creating',
  templateUrl: './product-creating.component.html',
  styleUrls: ['./product-creating.component.css']
})
export class ProductCreatingComponent implements OnInit {

  previewImageUrl!: any;
  selectedFile: File;
  imageUpload = false;
  productCreated = false;
  composition: string;
  indications: string;
  manifacturer: string;
  price: Float32Array;
  productDescription: string;
  productName: string;
  categories: any =[];
  categoriesList: Array<Category>;
  createdProduct: Product;
  product: productCreateForm;
  constructor(private categoryService: CategoryService, private adminService: AdminService, private notific: NotificationService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  showProduct(): void {
    this.product = new productCreateForm(this.composition,this.indications,this.manifacturer,this.price,this.productDescription,this.productName,this.categories)
    console.log(this.productDescription);
    this.createProduct();
  }

  createProduct():void{
    this.adminService.createProduct(this.product).subscribe(data=>{
      console.log('product created');
      this.productCreated = true;
      this.notific.showSnackBar(data)
      this.getProduct()
    },(error:HttpErrorResponse)=>{
      console.log(error.error);
      this.notific.showSnackBar(error.error);
  });
} 

  getProduct(): void{
      this.productService.getProductByName(this.productName).subscribe(data=>{
        this.createdProduct = data;
        console.log(data);
        
      },(error:HttpErrorResponse)=>{
        console.log(error.error);
        this.notific.showSnackBar(error.error);
    })
  }

  uploadImage(): void{
    console.log(this.imageUpload);
    
    if(this.imageUpload){
      console.log('trying save image');
      
      this.adminService.addImgToProduct(this.selectedFile, this.createdProduct.id).subscribe(data=>{
        console.log('photo uploaded');
      },(error:HttpErrorResponse)=>{
        console.log(error.error);
        this.notific.showSnackBar(error.error);
    })
    }
  }
  getAllCategory():void{
    var resp = this.categoryService.getCategory();
    resp.subscribe(data=>{
      this.categoriesList = data;
    })
  }

  addCategory(title:string):void{
    let cat ={'title': title}
    for(var i = 0; i<this.categories.length; i++) { 
      console.log(this.categories[i]['title']) 
      if(this.categories[i]['title'] == title){
        this.categories.splice(i, 1);
        console.log(this.categories);
        return
      }
   }
    this.categories.push(cat);
    console.log(this.categories);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.previewImageUrl = reader.result;
      console.log('image upload');
      this.imageUpload = true;
      
    };
  }

  formatImage(img: any): any {
    if (img == null){
      return null;
    }
    return 'data:image/jpeg;base64,' + img;
  }
}
