import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { ServerService } from 'src/app/services/server.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-fill-details',
  templateUrl: './fill-details.component.html',
  styleUrls: ['./fill-details.component.css']
})
export class FillDetailsComponent implements OnInit {


  constructor( private serverService:ServerService,
                private appComponent:AppComponent) { }
  ngOnInit() {
 
  


 }

 onSubmit(form:NgForm)
   {  this.appComponent.loaders()
    const value = form.value;
   console.log(JSON.stringify(value));
   this.serverService.SellerDetails(value.AddressLine1,value.AddressLine2,value.pincode,
    value.state,value.city,value.AccountHolderName,value.accountNumber,value.IFSCCode,value.accountType,
    value.ShippingFee,value.GSTNumber,value.PANCardNumber)
    .subscribe(
      (response)=>
      {
          this.appComponent.loaderOff();
      },
      (error)=>
      {
           this.appComponent.loaders();
      }
    )

}
}