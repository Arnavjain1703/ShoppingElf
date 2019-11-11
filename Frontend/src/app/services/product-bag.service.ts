
import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';
import { Bag } from '../shared/bag.model';
export class ProductBagService 
{


bagChanged= new Subject<Bag[]>();
private orders:Bag[]=[

   
    new Bag('shirt','olla',42,'/assets/slider1.jpg',42),
    new Bag('shirt','olla',42,'/assets/slider1.jpg',42),
    new Bag('shirt','olla',42,'/assets/slider1.jpg',42)




]


getBag()
{
   return this.orders.slice()
}

 setService(orders:Bag[])
 {
    this.orders=orders;
   this.bagChanged.next(this.orders.slice());
    
 }

}