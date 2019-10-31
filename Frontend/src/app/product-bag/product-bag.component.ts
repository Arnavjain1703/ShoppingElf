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
 number:number;
     bagSubscription:Subscription;
constructor(
             private productBagService:ProductBagService
           ) { }

  ngOnInit() {

    this.bagSubscription=this.productBagService.bagChanged
    .subscribe((orders:Product[])=>
    {
      this.orders=orders;
      

    }
    
    )
  }
  





}