import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { ProductService } from '../services/product.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  display=false;
  tk:any;
  constructor(private serverService :ServerService,
               private productService:ProductService,
               private appComponent:AppComponent) { }

  ngOnInit() {
  }
Ondisplay()
{
   this.display=!this.display
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

remove()
{
  this.serverService.loggOut();
}

}
