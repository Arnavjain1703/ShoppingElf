 import { Component, OnInit,Input } from '@angular/core';
 import { Product } from '../shared/product.module';
 import { ActivatedRoute, Params } from '@angular/router';
 import { Subscription } from 'rxjs';
 import { ProductService } from '../services/product.service';
 import { SizeService } from '../services/size.service';
 import { Category1Service } from '../services/category1.service';
 import { BrandsService } from '../services/brands.service';
 import { ProductBagService } from '../services/product-bag.service';
 import { ProductSize } from '../shared/size.module';
 import { ProductBagItemComponent } from '../product-bag/product-bag-item/product-bag-item.component';


 @Component({
   selector: 'app-product-details',
   templateUrl: './product-details.component.html',
   styleUrls: ['./product-details.component.css']
 })
export class ProductDetailsComponent implements OnInit {
 paramsubscription:Subscription;
  sizeSubscription:Subscription;
 index:number;
// display=false;

// added=false;
// number:number;
 product:Product;
   Sizes:ProductSize[];

   constructor( private route:ActivatedRoute ,
                private productService:ProductService,
                 private sizeService:SizeService,
//                private productBagService:ProductBagService,
//                private productBagItem:ProductBagItemComponent,
              
               ) { }

  ngOnInit() {
     this.paramsubscription=this.route.params
     
     .subscribe(
       (params:Params)=>
       {
         this.index=+params['id']
       }
     )
    //   this.sizeSubscription=this.SizeService.AllSize
    //     .subscribe((Sizes:ProductSize[])=>
    // { 
    //           this.Sizes=Sizes;
      

    //  }
    
    //  )
    this.product=this.productService.getProduct(this.index);
     this.Sizes=this.sizeService.getSize();
    
  }

//   dplay()
//   {
//     this.display=!this.display;
//   }

//    call(num:number)
//   {
    
//     this.productBagItem.num(num)
     
//   }

//   orders()
//   {
//      this.added=!this.added;
    
//      this.productBagService.addorder(this.product);
    
//   }
 }
     

    
  

