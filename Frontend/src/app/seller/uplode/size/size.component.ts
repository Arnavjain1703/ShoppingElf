import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/Forms';
import { AppComponent } from 'src/app/app.component';
import { ServerService } from 'src/app/services/server.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductSize } from 'src/app/shared/size.module';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  editmode=false;
  SizeForm:FormGroup;
  productID:number;
  paramSubscription:Subscription;
  sizeSubscription:Subscription;
  Sizes:ProductSize[];
  tk:any;
  price:any;
  size:any;
  quantity:any;
  number:number;

  constructor(private appComponent:AppComponent,
              private serverService:ServerService,
              private router:ActivatedRoute,
              private sizeService:SizeService) { }

  ngOnInit() {


    this.price=0;
     this.size="";
    this.quantity=0;
    this.SizeForm =new FormGroup({
      'productPrice':new FormControl(this.price,Validators.required),
      'productSize':new FormControl(this.size,Validators.required),
      'productQuantity':new FormControl(this.quantity,Validators.required)
    })


    

    this.sizeSubscription=this.sizeService.AllSize
         .subscribe((Sizes:ProductSize[])=>
     { 
               this.Sizes=Sizes;

              
              
      

     }   
      )

     this.Sizes=this.sizeService.getSize();
     console.log(this.Sizes);
     
   this.paramSubscription= this.router.params
    .subscribe(
      (params:Params)=>
      this.productID=+params['id']
    
    )
         this.appComponent.loaders();   
    this.serverService.size(this.productID)
    .subscribe(
      response=>
      {  
        
           console.log(response);
           this.tk=response
           console.log(this.tk)
           this.sizeService.setSize(this.tk);
           this.appComponent.loaderOff();
    
      },
      error=>
      {
        console.log(error);
        this.appComponent.loaderOff();

      }
       
  
    )
    

  
  }

  onSubmitSize()
{
   







  // this.appComponent.loaders();
  const productSize=this.SizeForm.value.productSize;
  const productPrice=this.SizeForm.value.productPrice;
  const productQuantity=this.SizeForm.value.productQuantity;
 
  
  this.sizeService.addSize(this.SizeForm.value)

  this.serverService.addSize(this.productID,productPrice,productSize,productQuantity)
   .subscribe
   (
     (response)=>
     {   this.tk=response;
        this.sizeService.setSize(this.tk);
         console.log(response);
         this.appComponent.loaderOff();
      },
      // (error) =>
      // {
      //     console.log(error);
      //     this.appComponent.loaderOff();
      // }
  )

}

//  edit(index:number)
//  {
//     this.editmode=true;
//     this.price= this.Sizes[index].productPrice;
//     this.quantity=this.Sizes[index].productQuantity;
//     this.size =this.Sizes[index].productSize;

//  }

deletesize(i:number)
  { 
      
   this.appComponent.loaders();
 this.number=this.Sizes[i].PID;
 console.log(this.number)
  this.serverService.deleteSize(this.number)
   .subscribe
   (
     (response)=>
     {
          console.log(response);
          this.tk=response;
          this.appComponent.SuccessModel(this.tk);
          this.appComponent.loaderOff();
   this.sizeService.delete(i+1);
              
     }
//     (error)=>
//     {
//          console.log(error);
//          this.appComponent.loaderOff();
//     }
 )
    }
}
