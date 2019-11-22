import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';
import { Category1Service } from 'src/app/services/category1.service';
import { SubCategory } from 'src/app/shared/SubCategory.model';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/category.model';
import { Category2Service } from 'src/app/services/category2.service';
import { ServerService } from 'src/app/services/server.service';
import {  FormGroup, FormControl, Validators } from '@angular/Forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uplode',
  templateUrl: './uplode.component.html',
  styleUrls: ['./uplode.component.css']
})


export class UplodeComponent implements OnInit {
  Brands:String[];
  category1Subscription:Subscription;
  category2Subscription:Subscription;
  categories:Category[];
  categories2:SubCategory[];
  ProductForm:FormGroup;
  categ1=false;
  categ2=false;

  productID:any;  

  valid=false;
  brand=false;
  
tk:any
  
 

  constructor( private brandService:BrandsService,
               private category1Service:Category1Service,
               private category2Service:Category2Service,
               private serverService:ServerService,
               private appComponent:AppComponent,
               private router:Router) { }

  ngOnInit() {
    this.ProductForm =new FormGroup({
      'productName': new FormControl(null, Validators.required),
      'productBrand': new FormControl(null,Validators.required),
      'SuitableID':new FormControl(null,Validators.required),
      'productCategory2':new FormControl(null,Validators.required),
      'SubCategoryID': new FormControl(null,Validators.required),
      'productDetails':new FormControl(null,Validators.required),
      });

     

   this.Brands= this.brandService.getBrands();
   
   
   this.category1Subscription=this.category1Service.category1Changed
    .subscribe((categories:Category[])=>
    {
      this.categories=categories;
    }
    )
    
   this.categories=this.category1Service.getCategories();
    
   this.category2Subscription = this.category2Service.category2Changed
   .subscribe(( categories2:SubCategory[])=>
   {
      this.categories2=categories2;
   })

   this.categories2=this.category2Service.getCategories();
   console.log(this.categories2);

  }
 
  
category1(index:number)
{this.appComponent.loaders();
 this.categ1=true;
 this.serverService.GetCategory1(index)
 .subscribe(
  response=>
  {   
    console.log(response)
    this.tk=response;
    this.category1Service.SetService(this.tk);
    this.appComponent.loaderOff();
  },
   error=>
   {
     console.log(error);
     this.appComponent.loaderOff();
   }
)
 
}
Brand()
{
  this.brand=true;
}
category2(Category:Category)
{
  this.categ2=true;
  this.appComponent.loaders();
   this.serverService.GetCategory2(Category.CategoryID)
   .subscribe(
    response=>
    {  this.appComponent.loaderOff()
      console.log(response)
      this.tk=response;
      this.category2Service.SetService(this.tk)
    },
     error=>
     {
        this.appComponent.loaderOff();
       console.log(error)
     }
  )

}
onSubmit()
{
   this.appComponent.loaders();
  const productName=this.ProductForm.value.productName
  const productBrand=this.ProductForm.value.productBrand;
  const SuitableID=this.ProductForm.value.SuitableID;
  const SubCategoryID=this.ProductForm.value.SubCategoryID;
  const productDetails=this.ProductForm.value.productDetails;
  
 this.serverService.addProduct(productName,productBrand,SuitableID,SubCategoryID,productDetails)
   .subscribe(
    (response)=>
     {  this.appComponent.loaderOff();
       this.productID=response;
    console.log(response);
      this.appComponent.loaderOff();
      this.router.navigate(['/Upload/'+this.productID])
    }
 )
 
}
Valids()
{
  this.valid=true;
}


}
