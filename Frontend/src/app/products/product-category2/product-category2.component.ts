import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/shared/SubCategory.model';
import { ServerService } from 'src/app/services/server.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product.module';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-category2',
  templateUrl: './product-category2.component.html',
  styleUrls: ['./product-category2.component.css']
})
export class ProductCategory2Component implements OnInit {

 tk:any;
 Products:Product[]
  @Input() Index:number;
  @Input() category2 :SubCategory;
  constructor( private serverService:ServerService,
               private productService:ProductService,
              private appComponent:AppComponent
    ) { }

  ngOnInit() {
  }

  Product()
  {  this.appComponent.loaders();
    this.serverService.CategoryProducts(this.category2.SubCategoryID)
    .subscribe(
      response=>
      {  
        this.appComponent.loaderOff();
        this.tk=response;
        this.Products=this.tk;
        console.log(this.Products);
    
        this.productService.setService(this.Products);
      },
      error=>
      {
        this.appComponent.loaderOff();
        console.log(error);
      }
       
  
    )
  }

}
