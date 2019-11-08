import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../shared/product.module';
import { ProductService } from './product.service';
import { AppComponent } from '../app.component';

@Injectable()

export class ServerService
{      
  tk:any;
  Products:Product[];
  private rootUrl="http://8297107c.ngrok.io"


  constructor(private http :HttpClient,
              private productService:ProductService, 
              ){}


  signup(yourName:string,phoneNumber:string,email:string,password:string,confirmPassword:string) 
   
    {  
      console.log(this.rootUrl+'/api/account/userlogin')
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        
       
        console.log(JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}));
         this.http.post(this.rootUrl+'/api/Account',JSON.stringify({yourName,email,password,confirmPassword,phoneNumber}),
        {headers:headers})
        .subscribe(
          response=>
          {  
            
         console.log(response);
        
            // this.productService.setService(this.Products);
          },
           error=> {
             console.log(error);
           }
      
        )
    }

    login(email:string ,password:string)
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
  getallMenProducts()
  {

    console.log(this.rootUrl+'/api/Product/Category/1');
     this.http.get(this.rootUrl+'/api/Product/Category/1')
     .subscribe(
      response=>
      {  
        
     console.log(response);
    
        // this.productService.setService(this.Products);
      },
       error=> {
         console.log(error);
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
}