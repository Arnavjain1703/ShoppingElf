import { Subject } from 'rxjs';
import { Order } from '../shared/order.model';

export class OrderService
{

orderChanged= new Subject<Order[]>();
    
private orders:Order[]=[
   
      new Order ('OLA','shirt',456,'x','/assets/Women 8.jpg',5) ,

      new Order ('OLA','shirt',456,'x','/assets/Women 8.jpg',5), 
      new Order ('OLA','shirt',456,'x','/assets/Women 8.jpg',5) ,

     
]

getOrder()
{
    return this.orders.slice()
}

setService(orders:Order[])
{
    this.orders=orders;
    this.orderChanged.next(this.orders.slice())
}

}