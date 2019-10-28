import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy  {
   products:Product[];
   subscription:Subscription;
  constructor( private productService:ProductService) { }

  ngOnInit() {
    this.subscription=this.productService.ProductChanged
    .subscribe((products:Product[])=>
    {
      this.products=products;
    })
   this.products=this.productService.getProducts()

  }
  ngOnDestroy()
  {
   this.subscription.unsubscribe();  
  }

}
