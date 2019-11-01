import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../shared/product.module';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 paramsubscription:Subscription
index:number;
display=false;
added=false;
product:Product;
  constructor( private route:ActivatedRoute ,
               private productService:ProductService
                   
               ) { }

  ngOnInit() {
    this.paramsubscription=this.route.params
     
    .subscribe(
      (params:Params)=>
      {
        this.index=+params['id']
      }
    )

    this.product=this.productService.getProduct(this.index);


  }

  dplay()
  {
    this.display=!this.display;
  }
  orders()
  {
     this.added=!this.added;
  }
}
