import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService, private ordersService: OrdersService) {
    this.breadcrumbService.set('@OrderDetail', '');
  }

  ngOnInit(): void {
    this.ordersService.getOrderDetails(+this.route.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
      this.order = order;
      this.breadcrumbService.set('@OrderDetail', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}
