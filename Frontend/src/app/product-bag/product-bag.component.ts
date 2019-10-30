import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product.module';
import { ProductBagService } from '../services/product-bag.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-bag',
  templateUrl: './product-bag.component.html',
  styleUrls: ['./product-bag.component.css']
})
export class ProductBagComponent implements OnInit {
 orders:Product[];
//  product:Product;
// jjjj=0;
// totalamount:number;
     bagSubscription:Subscription;
 
constructor(private productService:ProductService,
             private productBagService:ProductBagService) { }

  ngOnInit() {
  // this.product=this.productService.getProduct(1);
  //  this.totalamount=this.product.productPrice;
    this.bagSubscription=this.productBagService.bagChanged
    .subscribe((orders:Product[])=>
    {
      this.orders=orders;
    }
    )
  
    this.orders=this.productBagService.getOrders();
  }
  
// add(data:number)
// {  
//    data=data+1;
//    this.jjjj=data
//    this.totalamount=this.totalamount+this.product.productPrice
   
// }





}