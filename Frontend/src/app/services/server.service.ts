import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../shared/product.module';
import { ProductService } from './product.service';
import { AppComponent } from '../app.component';
import { Category1Service } from './category1.service';
import { Category2Service } from './category2.service';

@Injectable()

export class ServerService
{      
  tk:any;
  Products:Product[];
  private rootUrl="https://b9cd060a.ngrok.io"


  constructor(private http :HttpClient,
              private productService:ProductService,
              private CategoryService:Category1Service ,
              private CategoryService2:Category2Service
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
        return this.http.post(this.rootUrl,JSON.stringify({yourName,email,password,confirmPassword,mobileNumber}),
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
  getallMenProducts()
  {

    console.log(this.rootUrl+'/api/Product/GetProductBySuitableID/1');
     this.http.get( this.rootUrl+'/api/Product/GetProductBySuitableID/1')
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

  GetCategory1()
  {
    console.log(this.rootUrl+'/api/Product/Category/1');
    this.http.get( this.rootUrl+'/api/Product/Category/1')
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
  
  
  getallWomenProducts()
  {

    console.log('reached');
     this.http.get(this.rootUrl+'')
     .subscribe(
      response=>
      {  
        
        this.tk=response;
        this.Products=this.tk;
        console.log(this.Products);
    
        this.productService.setService(this.Products);
      }
       
  
    )
  }

  getallKidsProducts()
  {

    console.log('reached');
     this.http.get(this.rootUrl+'')
     .subscribe(
      response=>
      {  
        
        this.tk=response;
        this.Products=this.tk;
        console.log(this.Products);
    
        this.productService.setService(this.Products);
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
