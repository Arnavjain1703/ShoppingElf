import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  image:any;


  @Input () order:Order;

  constructor(private serverService:ServerService) { }

  ngOnInit() {
    console.log(this.order)
    this.image=this.serverService.rootUrl+this.order.productPicture;
  }

}
