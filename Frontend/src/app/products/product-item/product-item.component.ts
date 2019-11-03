import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import {  Subscription } from 'rxjs';
import { ShowService } from 'src/app/services/show.service';
import { Price } from 'src/app/shared/price.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnDestroy {
    
  
  subscription:Subscription;
  brandSubscription:Subscription;
  priceSubscription:Subscription;
  showBrandSubscription:Subscription;
  showPriceSubscription:Subscription;

  @Input () product:Product;

  @Input() index:number;
  display=false;
  show:boolean;
  showBrand:boolean;
  showPrice:boolean;
  
  brand:string;
  
  price1:number;
  price2:number;
  constructor( private productBagService:ProductBagService,
                private showService:ShowService) { }

  ngOnInit() {

    this.showBrandSubscription=this.showService.ShowBrand
    .subscribe((showBrand:boolean)=>
    {
      this.showBrand=showBrand;
    })

    this.showBrand=true;

    this.showPriceSubscription=this.showService.ShowPrices
    .subscribe((showPrice:boolean)=>
    {
      this.showPrice=showPrice;
    })

    this.showPrice=true;

    this.subscription= this.showService.AllChanged
    .subscribe((show:boolean)=>
    {
      this.show=show;
    })

    this.show=true;

    this.brandSubscription= this.showService.BrandChanged
    .subscribe((brand:string)=>
    {
        this.brand=brand;
    })

    this.priceSubscription=this.showService.PriceChanged
    .subscribe((price:Price)=>
    {
      this.price1=price.price1;
      this.price2=price.price2;
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


