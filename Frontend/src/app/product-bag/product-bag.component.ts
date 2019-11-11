import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductBagService } from '../services/product-bag.service';
import { Subscription } from 'rxjs';
import { Bag } from '../shared/bag.model';

@Component({
  selector: 'app-product-bag',
  templateUrl: './product-bag.component.html',
  styleUrls: ['./product-bag.component.css']
})
export class ProductBagComponent implements OnInit,OnDestroy {
 orders:Bag[];
     bagSubscription:Subscription;
     i:number;
     index:number;
     total=0;
     
constructor(
             private productBagService:ProductBagService,
          ) { }

  ngOnInit() {

    this.bagSubscription=this.productBagService.bagChanged
    .subscribe((orders:Bag[])=>
    {
      this.orders=orders;
      

    }
    
    )
   this.orders= this.productBagService.getBag()
  }
  
ngOnDestroy()
{
  this.bagSubscription.unsubscribe(); 
}

// Total()
// { this.total=0;
//  for(this.i=0; this.i<this.productBagService.length();this.i++ )  
//   {
    
//       // this.total=this.total+this.orders[this.i].productTotal;


//    }

  


// }

// Delete(index:number)
// {
//   //  this.total=this.total-this.orders[index].productTotal; 
// }



// num(i:number)
// {
//  this.index=i; 
// }

}