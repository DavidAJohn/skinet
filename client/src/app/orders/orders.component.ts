import { Router } from '@angular/router';
import { IOrder } from './../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders() {
    this.ordersService.getUserOrders()
      .subscribe((orders: IOrder[]) => {
        this.orders = orders;
      }, error => {
        console.log(error);
    });
  }

}
