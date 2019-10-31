import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/product.module';
import { ProductBagService } from '../services/product-bag.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-bag',
  templateUrl: './product-bag.component.html',
  styleUrls: ['./product-bag.component.css']
})
export class ProductBagComponent implements OnInit,OnDestroy {
 orders:Product[];
     bagSubscription:Subscription;
     i:number;
     total:number;
     
constructor(
             private productBagService:ProductBagService
           ) { }

  ngOnInit() {

    this.bagSubscription=this.productBagService.bagChanged
    .subscribe((orders:Product[])=>
    {
      this.orders=orders;
      

    }
    
    )
    this.orders=this.productBagService.getOrders();
  }
  
ngOnDestroy()
{
  this.bagSubscription.unsubscribe(); 
}

Total()
{ this.total=0;
 for(this.i=0; this.i<this.productBagService.length();this.i++ )  
  {
    
      this.total=this.total+this.orders[this.i].productTotal;


   }

  


}

Delete(index:number)
{
   this.total=this.total-this.orders[index].productTotal; 
}





}