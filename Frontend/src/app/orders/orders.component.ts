import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';
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
  tk:any;
  constructor(
    private orderService:OrderService,
    private serverService:ServerService,
    private appComponent:AppComponent
    
  ) { }

  ngOnInit() {
    this.appComponent.loaders();
    this.serverService.myOrders()
    .subscribe(
      response=>
      {  
       this.appComponent.loaderOff()
        
           console.log(response);
           this.tk=response
       this.orderService.setService(this.tk);
           
    
      },
      error=>
      {
        console.log(error);
        this.appComponent.loaderOff()
 
      }
       
  
    ) 
 
    this.orderSubscription=this.orderService.orderChanged
    .subscribe((orders:Order[])=>
    {
      this.orders=orders;
      

    }


    
    )
      this.orders= this.orderService.getOrder()
      

  

  }

}
