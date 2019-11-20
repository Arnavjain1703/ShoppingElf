import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import {  Subscription } from 'rxjs';
import { ShowService } from 'src/app/services/show.service';
import { Price } from 'src/app/shared/price.module';
import { ServerService } from 'src/app/services/server.service';
import { SizeComponent } from 'src/app/seller/uplode/size/size.component';
import { SizeService } from 'src/app/services/size.service';
import { AppComponent } from 'src/app/app.component';

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
   image1:any;
   image2:any;
   image3:any;
   image4:any;
   tk:any;

  brand:string;
  
  price1:number;
  price2:number;
  constructor( private productBagService:ProductBagService,
                private showService:ShowService,
                private serverService:ServerService,
                private sizeService:SizeService,
                private appComponent:AppComponent) { }

  ngOnInit() {

    this.showBrandSubscription=this.showService.ShowBrand
    .subscribe((showBrand:boolean)=>
    {
      this.showBrand=showBrand;
    })

    this.showBrand=true;

    console.log('showBrand'+this.showBrand)
    this.showPrice=true;

    this.showPriceSubscription=this.showService.ShowPrices
    .subscribe((showPrice:boolean)=>
    {
      this.showPrice=showPrice;
    })
    console.log('showPrice'+this.showPrice)



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
      
   this.image1=this.serverService.rootUrl+this.product.picture1;

this.image2=this.serverService.rootUrl+this.product.picture2;
this.image3=this.serverService.rootUrl+this.product.picture3;
this.image4=this.serverService.rootUrl+this.product.picture4;



  }

  details()
  {  this.appComponent.loaders();
    this.serverService.size(this.product.ProductID)
    .subscribe(
      response=>
      {  
          this.appComponent.loaderOff();
           console.log(response);
           this.tk=response
           console.log(this.tk)
           this.sizeService.setSize(this.tk);
           
    
      },
      error=>
      {
        this.appComponent.loaderOff();

        console.log(error);
      }
       
  
    ) 
  }

  call()
  {
    this.display=true;
  }
  uncall()
  {
    this.display=false;
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


