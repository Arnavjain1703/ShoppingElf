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
  edit=false;
  SizeForm:FormGroup;
  productID:number;
  paramSubscription:Subscription;
  sizeSubscription:Subscription;
  Sizes:ProductSize[];
  tk:any;
  constructor(private appComponent:AppComponent,
              private serverService:ServerService,
              private router:ActivatedRoute,
              private sizeService:SizeService) { }

  ngOnInit() {
    this.SizeForm =new FormGroup({
      'productPrice':new FormControl(null,Validators.required),
      'productSize':new FormControl(null,Validators.required),
      'productQuantity':new FormControl(null,Validators.required)
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
    
    this.serverService.size(this.productID)
    

  
  }

  onSubmitSize()
{
  this.appComponent.loaders();
  const productSize=this.SizeForm.value.productSize;
  const productPrice=this.SizeForm.value.productPrice;
  const productQuantity=this.SizeForm.value.productQuantity;
 
  this.sizeService.addSize(this.SizeForm.value)
  

  this.serverService.addSize(this.productID,productPrice,productSize,productQuantity)
  .subscribe
  (
     (response)=>
     {  this.sizeService
        console.log(response);
        this.appComponent.loaderOff();
     },
     (error) =>
     {
         console.log(error);
         this.appComponent.loaderOff();
     }
  )

}

deletesize( index:number,i:number)
  { console.log(this.Sizes[i].PID)
   this.appComponent.loaders();
  this.sizeService.delete(i);
  this.serverService.deleteSize(this.Sizes[i].PID)
  .subscribe
  (
    (response)=>
    {
         console.log(response);
         this.tk=response;
         this.appComponent.SuccessModel(this.tk);
         this.appComponent.loaderOff();

    },
    (error)=>
    {
         console.log(error);
         this.appComponent.loaderOff();
    }
  )
}
}
