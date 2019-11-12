import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Subscribable, Subscription } from 'rxjs';
import { Order } from '../shared/order.model';
import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderSubscription:Subscription;
  orders:Order[];
  constructor(
    private orderService:OrderService,
    private serverService:ServerService,
    
  ) { }

  ngOnInit() {

    this.serverService.myOrders()
 
    this.orderSubscription=this.orderService.orderChanged
    .subscribe((orders:Order[])=>
    {
      this.orders=orders;
      

    }


    
    )
      this.orders= this.orderService.getOrder()
      

  

  }

}
