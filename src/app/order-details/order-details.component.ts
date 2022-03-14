import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { NotificationService } from '../services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id: number;
  order:Order;

  constructor(private orderService: OrderService, private notific: NotificationService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = Number(data['id']);
      this.getOrder(this.id);
    })
  }

  getOrder(id: number): void{
    var resp =this.orderService.getOrder(id);
    resp.subscribe(data=>{
      this.order=data;
      console.log(data);
      
    }, (error:HttpErrorResponse)=>{
      console.log(error);
      
      this.notific.showSnackBar(error.error)
  });}

}
