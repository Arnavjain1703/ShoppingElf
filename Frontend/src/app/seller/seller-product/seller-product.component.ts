import { Component, OnInit } from '@angular/core';
import { sellerService } from 'src/app/services/sellerProduct.service';
import { Product } from 'src/app/shared/product.module';
import { ServerService } from 'src/app/services/server.service';
import { AppComponent } from 'src/app/app.component';
import { TouchSequence } from 'selenium-webdriver';
import { Sail } from 'src/app/shared/sellersails.module';
import { sailService } from 'src/app/services/sails.service';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {
tk:any;
products:Product[];
Sails:Sail[];
  constructor( private sellerService:sellerService,
               private serverService:ServerService,
               private appComponent:AppComponent,
               private sailService:sailService) { }

  ngOnInit() {
    this.appComponent.loaders();
    
    this.serverService.sellerProduct()
    .subscribe
    (
      (response)=>
      {   this.appComponent.loaderOff();
           this.tk=response;
           this.sellerService.setService(this.tk);
      }

    )
    this.serverService.Selled()
    .subscribe
    (
      (response)=>
      {
        this.tk=response;
        this.sailService.setService(this.tk);
        

      }
    )
   this.sellerService.ProductChanged
   .subscribe((products:Product[])=>
    {
      this.products=products;
    })

   
    this.products=this.sellerService.getProducts();
   
   this.sailService.sailChanged.subscribe((Sails:Sail[]) =>
   {
     this.Sails=Sails;
   }

   
   
    

   )


   this.Sails=this.sailService.getProducts();
   
  }

}
