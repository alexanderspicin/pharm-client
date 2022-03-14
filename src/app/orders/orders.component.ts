import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { NotificationService } from '../services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userOrders: Array<Order>
  constructor(private orderService: OrderService, private notific: NotificationService,) { }

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders(): void{
    var resp =this.orderService.getOrders();
    resp.subscribe(data=>{
      this.userOrders=data;
      console.log(data);
      
    }, (error:HttpErrorResponse)=>{
      this.notific.showSnackBar(error.error)
  });}
}
