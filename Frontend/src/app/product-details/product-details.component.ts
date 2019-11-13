 import { Component, OnInit,Input } from '@angular/core';
 import { Product } from '../shared/product.module';
 import { ActivatedRoute, Params } from '@angular/router';
 import { Subscription } from 'rxjs';
 import { ProductService } from '../services/product.service';
 import { SizeService } from '../services/size.service';
 import { Category1Service } from '../services/category1.service';
 import { BrandsService } from '../services/brands.service';
 import { ProductBagService } from '../services/product-bag.service';
 import { ProductSize } from '../shared/size.module';
 import { ProductBagItemComponent } from '../product-bag/product-bag-item/product-bag-item.component';
import { callbackify } from 'util';
import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';


 @Component({
   selector: 'app-product-details',
   templateUrl: './product-details.component.html',
   styleUrls: ['./product-details.component.css']
 })
export class ProductDetailsComponent implements OnInit {
 paramsubscription:Subscription;
  sizeSubscription:Subscription;
 index:number;
 PID:number;
 tk:any;
 

// display=false;

// added=false;
// number:number;
 product:Product;
   Sizes:ProductSize[];

   constructor( private route:ActivatedRoute ,
                private productService:ProductService,
                 private sizeService:SizeService,
                 private serverService:ServerService,
                 private appComponent:AppComponent
               ) { }

  ngOnInit() {
     this.paramsubscription=this.route.params
     
     .subscribe(
       (params:Params)=>
       {
         this.index=+params['id']
       }
     )
    
     this.sizeSubscription=this.sizeService.AllSize
         .subscribe((Sizes:ProductSize[])=>
     { 
               this.Sizes=Sizes;
               console.log(Sizes[0].ProductModel.productBrand)
      

     }
    
    )
    this.product=this.productService.getProduct(this.index);
     this.Sizes=this.sizeService.getSize();
    
  }

call(pid:number)
  {
     this.PID=pid;
     console.log(this.PID);
    
  } 

  Add()
  {    this.appComponent.loaders()
    console.log(this.PID)
    this.serverService.Addtocart(this.PID)     
    .subscribe(
      response=>
      {  
          this.tk=response;
        this.appComponent.loaderOff();
        console.log(response);
    
      },
      error=>
      {
        this.appComponent.loaderOff();
        console.log(error);
      }
       
  
    )  

  
    
  }
 }
   

    
  

