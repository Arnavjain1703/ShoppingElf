import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import {  Subscription } from 'rxjs';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnDestroy {
    
  
  subscription:Subscription;
  brandSubscription:Subscription;

  @Input () product:Product;

  @Input() index:number;
  display=false;
  show:boolean;
  brand:string;
  constructor( private productBagService:ProductBagService,
                private showService:ShowService) { }

  ngOnInit() {
    this.subscription= this.showService.AllChanged
    .subscribe((show:boolean)=>
    {
      this.show=show;
    })
      this.show=this.showService.getShow();

    this.brandSubscription= this.showService.BrandChanged
    .subscribe((brand:string)=>
    {
        this.brand=brand;
    })
      

  }



  call()
  {
    this.display=true;
  }
  uncall()
  {
    this.display=false;
  }

  orders()
  {
    this.productBagService.addorder(this.product);
  }

  Brand(brand)
  {
    this.brand=brand;
  }
  

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
 
}


