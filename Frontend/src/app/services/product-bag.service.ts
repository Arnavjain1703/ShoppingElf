
import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';
export class ProductBagService 
{


bagChanged= new Subject<Product[]>();
private orders:Product[]=[

    new Product ('sdnvjo',456,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw',0),
    new Product ('sdnvjo',456,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw',0),



]

getOrders()
{
    return this.orders.slice();
}

addorder(order:Product)
{
    this.orders.push(order);
    this.bagChanged.next(this.orders.slice())
    
}
deleteorder(index:number)
{
    this.orders.splice(index,1);
    this.bagChanged.next(this.orders.slice());
}




}