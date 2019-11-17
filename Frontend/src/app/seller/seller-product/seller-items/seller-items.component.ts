import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ServerService } from 'src/app/services/server.service';

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

  @Input () product:Product;
  @Input () index:number;
   display=false;
  constructor( private serverService:ServerService ) { }

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


}
