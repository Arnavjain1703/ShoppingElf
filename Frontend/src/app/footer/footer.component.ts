import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ServerService } from '../services/server.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private appComponent:AppComponent,
    private serverService:ServerService,
    private  productService:ProductService) { } 
   tk:any;

  ngOnInit() {
  }
  menProducts()
  {
    this.appComponent.loaders();
    this.serverService.getallProducts(1)
    .subscribe(
      response=>
      {  
        
     console.log(response);
     this.tk=response;
     this.productService.setService(this.tk);
    
     this.appComponent.loaderOff();
    
        
      },
       error=> {
         console.log(error);
         this.appComponent.loaderOff();
  
       }
  
    )
    this.serverService.GetCategory1(1);
  
    
  }
  
  womenProducts()
  { 
    this.appComponent.loaders();
  
    this.serverService.getallProducts(2)
    .subscribe(
      response=>
      {  
        
     console.log(response);
     this.tk=response;
     this.productService.setService(this.tk);
     this.appComponent.loaderOff();
    
        
      },
       error=> {
         console.log(error);
         this.appComponent.loaderOff();
  
       }
  
    )
    this.serverService.GetCategory1(2)
  
  }
  
  kidsProducts()
  {
    this.appComponent.loaders();
  
    this.serverService.getallProducts(3)
    .subscribe(
      response=>
      {  
        
     console.log(response);
     this.tk=response;
     this.productService.setService(this.tk);
     this.appComponent.loaderOff();
    
        
      },
       error=> {
         console.log(error);
         this.appComponent.loaderOff();
  
       }
  
    )
    
    this.serverService.GetCategory1(3);
  
  }
}
