import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ServerService } from 'src/app/services/server.service';
import { AppComponent } from 'src/app/app.component';
import { SellerProductComponent } from '../seller-product.component';
import { sellerService } from 'src/app/services/sellerProduct.service';

@Component({
  selector: 'app-seller-items',
  templateUrl: './seller-items.component.html',
  styleUrls: ['./seller-items.component.css']
})
export class SellerItemsComponent implements OnInit {
   

  
  image1:any;
  image2:any;
  image3:any;
  image4:any;
  tk:any;

  @Input () product:Product;
  @Input () index:number;
   display=false;
  constructor( private serverService:ServerService,
               private appComponent:AppComponent,
               private sellerService:sellerService ) { }

  ngOnInit() {
  
    this.image1=this.serverService.rootUrl+this.product.picture1
    this.image2=this.serverService.rootUrl+this.product.picture2
    this.image3=this.serverService.rootUrl+this.product.picture3
    this.image4=this.serverService.rootUrl+this.product.picture4


  }
  call()
  {
    this.display=true;
  }
  uncall()
  {
    this.display=false;
  }
delete()
{  this.appComponent.loaders()
   this.sellerService.deleteProduct(this.index)

  this.serverService.DeleteProduct(this.product.ProductID)
  .subscribe
  (    
    (response)=>
    {
        this.tk=response;
       this.appComponent.loaderOff();
       this.appComponent.SuccessModel(this.tk)
    }
    ,
    (error)=>
    {
      console.log(error);
      this.appComponent.loaderOff();
    }
  )
}

}
