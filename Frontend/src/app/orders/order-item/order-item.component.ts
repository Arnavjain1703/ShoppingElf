import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input () order:Order;

  constructor() { }

  ngOnInit() {
    console.log(this.order)
  }

}
