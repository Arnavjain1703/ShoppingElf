import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/Forms';
import { AppComponent } from 'src/app/app.component';
import { ServerService } from 'src/app/services/server.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  SizeForm:FormGroup;
  productID:number;
  paramSubscription:Subscription
  
  constructor(private appComponent:AppComponent,
              private serverService:ServerService,
              private router:ActivatedRoute) { }

  ngOnInit() {
    this.SizeForm =new FormGroup({
      'productPrice':new FormControl(null,Validators.required),
      'productSize':new FormControl(null,Validators.required),
    })

   this.paramSubscription= this.router.params
    .subscribe(
      (params:Params)=>
      this.productID=+params['id']
    
    )
  
  }

  onSubmitSize()
{
  this.appComponent.loaders();
  const productSize=this.SizeForm.value.productSize;
  const productPrice=this.SizeForm.value.productPrice;

  this.serverService.addSize(this.productID,productPrice,productSize)
  .subscribe
  (
     (response)=>
     {
        console.log(response);
     },
     (error) =>
     {
         console.log(error);
     }
  )

}
}
