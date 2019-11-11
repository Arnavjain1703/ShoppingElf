import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../shared/product.module';
import { ProductService } from './product.service';
import { AppComponent } from '../app.component';
import { Category1Service } from './category1.service';
import { Category2Service } from './category2.service';
import { SizeService } from './size.service';

@Injectable()

export class ServerService
{      
  tk:any;
  Products:Product[];
  private rootUrl="https://b9cd060a.ngrok.io"


  constructor(private http :HttpClient,
              private productService:ProductService,
              private CategoryService:Category1Service ,
              private CategoryService2:Category2Service,
              private sizeService:SizeService
              ){}


  signup(yourName:string,phoneNumber:string,email:string,password:string,confirmPassword:string) 
   
    {  
      console.log(this.rootUrl+'/api/Account')
        const headers = new HttpHeaders({'Content-Type':'application/json'});
         console.log(JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}));
        return this.http.post(this.rootUrl+'/api/Account',JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}),
        {headers:headers})
       
    }

    login(email:string ,password:string)
  { 
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({email,password}));
    console.log(this.rootUrl+'/api/Account/UserLogin')
   return this.http.post(this.rootUrl+'/api/Account/UserLogin',JSON.stringify({email,password}),{headers:headers})
   
    
  }

  sellersignup(yourName:string,mobileNumber:string,email:string,password:string,confirmPassword:string) 
   
    {  
      
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        
       
        console.log(JSON.stringify({yourName,email,password,confirmPassword,mobileNumber}));
        return this.http.post(this.rootUrl+'/api/Seller/Signup',JSON.stringify({yourName,email,password,confirmPassword,mobileNumber}),
        {headers:headers})
        
    }


    sellerlogin(email:string ,password:string)
  { 
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({email,password}));
    console.log(this.rootUrl+'/api/account/userlogin')
   this.http.post(this.rootUrl+'/api/account/userlogin',JSON.stringify({email,password}),{headers:headers})
   .subscribe(
    (response) =>
     {      
           this.tk=response;
          console.log(this.tk);
        localStorage.setItem('token',this.tk);
     }                                                
       
  );
    
  }




 loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  loggOut()
  {
    localStorage.removeItem('token');

  }
  getallProducts(index:number)
  {

    console.log(this.rootUrl+'/api/Product/GetProductBySuitableID/'+index);
     this.http.get( this.rootUrl+'/api/Product/GetProductBySuitableID/'+index)
     .subscribe(
      response=>
      {  
        
     console.log(response);
     this.tk=response;
     this.productService.setService(this.tk);
    
        
      },
       error=> {
         console.log(error);
       }
  
    )



  
  }

  GetCategory1(Index:number)
  {
    console.log(this.rootUrl+'/api/Product/Category/'+Index);
    this.http.get( this.rootUrl+'/api/Product/Category/'+Index)
    .subscribe(
      response=>
      {
        console.log(response)
        this.tk=response;
        this.CategoryService.SetService(this.tk)
      },
       error=>
       {
         console.log(error)
       }
    )

  }

  GetCategory2(index:number)
  {
    console.log(this.rootUrl+'/api/Product/SubCategory/'+index);
    this.http.get( this.rootUrl+'/api/Product/SubCategory/'+index)
    .subscribe(
      response=>
      {
        console.log(response)
        this.tk=response;
        this.CategoryService2.SetService(this.tk)
      },
       error=>
       {
         console.log(error)
       }
    )

  }
  
  
  
  CategoryProducts(Index:number)
  {
    this.http.get(this.rootUrl+'/api/Product/GetProduct/'+Index)
    .subscribe(
     response=>
     {  
       
       this.tk=response;
       this.Products=this.tk;
       console.log(this.Products);
   
       this.productService.setService(this.Products);
     },
     error=>
     {
       console.log(error);
     }
      
 
   )  
  }


  size(Index:number)
  {
    console.log(this.rootUrl+'/api/Product/ProductDetails/'+Index)
    this.http.get(this.rootUrl+'/api/Product/ProductDetails/'+Index)
    .subscribe(
     response=>
     {  
       
          console.log(response);
          this.tk=response
          console.log(this.tk)
          this.sizeService.setSize(this.tk);
          
   
     },
     error=>
     {
       console.log(error);
     }
      
 
   ) 
  }

  SellerDetails(AddressLine1,AddressLine2,pincode,
    state,city,AccountHolderName,accountNumber,IFSCCode,accountType,
    ShippingFee,GSTNumber,PANCardNumber)
    {
    
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({AddressLine1,AddressLine2,pincode,state,city,AccountHolderName,accountNumber
                    ,IFSCCode,accountType,ShippingFee,GSTNumber,PANCardNumber}));
      return this.http.post(this.rootUrl,JSON.stringify({AddressLine1,AddressLine2,pincode,state,city,AccountHolderName,accountNumber,
   IFSCCode,accountType,ShippingFee,GSTNumber,PANCardNumber}),
      {headers:headers})
      
  }


}