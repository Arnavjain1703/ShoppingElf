 import { Component, OnInit,Input } from '@angular/core';
 import { Product } from '../shared/product.module';
 import { ActivatedRoute, Params, Router } from '@angular/router';
 import { Subscription } from 'rxjs';
 import { ProductService } from '../services/product.service';
 import { SizeService } from '../services/size.service';
 import { ProductSize } from '../shared/size.module';
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
 clicked=false;
 image1:any;
 image2:any;
 image3:any;
 image4:any;

 product:Product;
   Sizes:ProductSize[];

   constructor( private route:ActivatedRoute ,
                private productService:ProductService,
                 private sizeService:SizeService,
                 private serverService:ServerService,
                 private appComponent:AppComponent,
                 private router:Router
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
              
      

     }
    
    )
    this.product=this.productService.getProduct(this.index);
     this.Sizes=this.sizeService.getSize();

       this.image1=this.serverService.rootUrl+this.product.picture1;

this.image2=this.serverService.rootUrl+this.product.picture2;
this.image3=this.serverService.rootUrl+this.product.picture3;
this.image4=this.serverService.rootUrl+this.product.picture4;


  }

call(pid:number,index)
  {
     this.PID=pid;
     console.log(this.PID);
     this.clicked=true;
     console.log(this.clicked);
      
  } 

  Add()
  {   
     
    this.appComponent.loaders()
        console.log(this.PID)
        this.serverService.Addtocart(this.PID)     
        .subscribe(
          response=>
          {  
              this.tk=response;
            this.appComponent.loaderOff();
            this.appComponent.SuccessModel(this.tk)
            console.log(response);
        
          },
          error=>
          {
            this.appComponent.loaderOff();
            console.log(error.error.Message);
            this.appComponent.WarningModel(error.error.Message);
            
          }
           
      
        ) 
  }



  oneOrder()
  {
    // this.appComponent.loaders()

    // this.serverService.oneOrder(this.PID)
    // .subscribe(
    //   (response)=>
    //   {
    //     this.appComponent.loaderOff();
    //     this.tk=response
    //     this.appComponent.SuccessModel(this.tk)
    //   }
    // )
    this.router.navigate(['address/'+this.PID+'/add'])

  }
 }
   

    
  

