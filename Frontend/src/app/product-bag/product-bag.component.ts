import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/product.module';
import { ProductBagService } from '../services/product-bag.service';
import { Subscription } from 'rxjs';
import { ProductSize } from '../shared/size.module';
import { SizeService } from '../services/size.service';

@Component({
  selector: 'app-product-bag',
  templateUrl: './product-bag.component.html',
  styleUrls: ['./product-bag.component.css']
})
export class ProductBagComponent implements OnInit,OnDestroy {
 orders:Product[];
     bagSubscription:Subscription;
     i:number;
     index:number;
     Size:ProductSize[];
     total=0;
     
constructor(
             private productBagService:ProductBagService,
             private productSize:SizeService,
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
    
      // this.total=this.total+this.orders[this.i].productTotal;


   }

  


}

Delete(index:number)
{
  //  this.total=this.total-this.orders[index].productTotal; 
}



num(i:number)
{
 this.index=i; 
}

}