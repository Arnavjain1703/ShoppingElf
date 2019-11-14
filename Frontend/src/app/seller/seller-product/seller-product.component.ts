import { Component, OnInit } from '@angular/core';
import { sellerService } from 'src/app/services/sellerProduct.service';
import { Product } from 'src/app/shared/product.module';
import { ServerService } from 'src/app/services/server.service';
import { AppComponent } from 'src/app/app.component';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {
tk:any;
products:Product[];
  constructor( private sellerService:sellerService,
               private serverService:ServerService,
               private appComponent:AppComponent) { }

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
   this.sellerService.ProductChanged
   .subscribe((products:Product[])=>
    {
      this.products=products;
    })

   this.products=this.sellerService.getProducts();

  }

}
