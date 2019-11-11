import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product.module';
import { Subscription } from 'rxjs';
import { Category1Service } from '../services/category1.service';
import { Category2Service } from '../services/category2.service';
import { BrandsService } from '../services/brands.service';
import { ShowService } from '../services/show.service';
import { PriceService } from '../services/priceService';
import { Price } from '../shared/price.module';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy  {
   products:Product[];
   categories:Category[];
   categories2:Category[];
   Brands:string[];
   Prices:Price[];
   disply = false;
   display=false;
   display1=false;
   display2=false;
   display3=false;
   subscription:Subscription;
   category1Subscription:Subscription;
   category2Subscription:Subscription;
   PriceSubscription:Subscription;

   

  constructor( private productService:ProductService,
                private category1Service:Category1Service,
                private category2Service:Category2Service,
                private brandsService:BrandsService,
                private productItem:ShowService,
                private priceService:PriceService,
                private Elref:ElementRef
                ) { }

  ngOnInit() {
    
    
    this.PriceSubscription=this.priceService.priceChanged
    .subscribe((prices:Price[])=>
    {
        this.Prices=prices;
    })
       this.Prices=this.priceService.getPrices();
    this.category2Subscription = this.category2Service.category2Changed
    .subscribe(( categories2:Category[])=>
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
    .subscribe((categories:Category[])=>
    {
      this.categories=categories;
    }
    )
 
     this.categories=this.category1Service.getCategories();
     this.Brands=this.brandsService.getBrands();


    
  }
  call(brand:string)
  {
    this.productItem.change();
    this.productItem.changeBrand(brand);
  }
  AllBrand()
  {
     this.productItem.AllBrand();  
  }

  allPrices()
  {
    this.productItem.AllPrices();
  }
  ranges(price:Price)
  {
     this.productItem.priceChanged(price)    
  }

  
 
  show()
  {
   this.display=!this.display;
   this.display=false;
   this.display3=false;
   this.display1=false;
  }
  show1()
  {
   this.display1=!this.display1;
   this.display=false;
   this.display2=false;
   this.display3=false;
  }
  show2()
  {
   this.display2=!this.display2;
   this.display=false;
   this.display3=false;
   this.display1=false;
  }
  show3()
  {
   this.display3=!this.display3;
   this.display=false;
   this.display2=false;
   this.display1=false;
  }



  ngOnDestroy()
  {
   this.subscription.unsubscribe();  
   this.category2Subscription.unsubscribe();
   


  }
  
 

  

}
