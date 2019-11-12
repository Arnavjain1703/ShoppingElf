import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductBagService } from '../services/product-bag.service';
import { Subscription } from 'rxjs';
import { Bag } from '../shared/bag.model';

import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';

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
     total:number;
     tk:any;
     
constructor(
             private productBagService:ProductBagService,
             private serverService:ServerService,
             private productBag:ProductBagService,
             private appComponent:AppComponent,
          ) { }

  ngOnInit() {
     this.appComponent.loaders();
    this.serverService.MyBag()
    .subscribe(
      response=>
      {     
          
           console.log(response);
           this.tk=response
           this.productBag.setService(this.tk);
       
           this.appComponent.loaderOff()
           this.Total();
           
    
      },
      error=>
      {
        console.log(error);
      }
    )
       
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

 Total()
 { this.total=0;
 for(this.i=0; this.i<this.orders.length;this.i++ )  
   {
    
        
      this.total=this.total+this.orders[this.i].Quantity*this.orders[this.i].SizeModel.productPrice

   }

  


 }
}

