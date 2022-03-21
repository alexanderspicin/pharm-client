import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  categories: Array<Category>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  getAllCategory():void{
    var resp = this.categoryService.getCategory();
    resp.subscribe(data=>{
      this.categories = data;
    })
  }
}
