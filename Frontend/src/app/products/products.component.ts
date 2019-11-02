import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product.module';
import { Subscription } from 'rxjs';
import { SignupComponent } from '../signup/signup.component';
import { Category1Service } from '../services/category1.service';
import { Category2Service } from '../services/category2.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy  {
   products:Product[];
   categories:string[];
   categories2:string[];
   subscription:Subscription;
   category1Subscription:Subscription;
   category2Subscription:Subscription;

  constructor( private productService:ProductService,
                private category1Service:Category1Service,
                private category2Service:Category2Service) { }

  ngOnInit() {
    this.category2Subscription = this.category2Service.category2Changed
    .subscribe(( categories2:string[])=>
    {
       this.categories2=categories2;
    })

    this.categories2=this.category2Service.getCategories();
  

  
   
    this.subscription=this.productService.ProductChanged
    .subscribe((products:Product[])=>
    {
      this.products=products;
    })
   
    this.products=this.productService.getProducts()

   
   
   this.category1Subscription=this.category1Service.category1Changed
    .subscribe((categories:string[])=>
    {
      this.categories=categories;
    }
    )
 
     this.categories=this.category1Service.getCategories()

  }
  ngOnDestroy()
  {
   this.subscription.unsubscribe();  
   this.category2Subscription.unsubscribe();
  }

  

}
