import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { NgForm } from '@angular/Forms';
import { OtpComponent } from '../otp/otp.component';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SellerSignupComponent implements OnInit {
  tk:any;
  constructor( private serverService:ServerService,
                private  otpComponent:OtpComponent,
                private route:Router,
                private appComponent:AppComponent) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    const value =form.value;
    console.log(value);
    this.appComponent.loaders();
    
   this.serverService.sellersignup(value.yourName,value.mobileNumber,value.email,value.password,value.confirmPassword)
   .subscribe(
    response=>
    {  this.tk=response
         localStorage.setItem('num',this.tk)
   console.log(response);
   this.route.navigate(['seller/otp'])
     this.appComponent.loaderOff();
  
    },
     error=> {
       console.log(error);
        this.appComponent.WarningModel(error.error.Message)
        this.appComponent.loaderOff();
     }

  )
   
}

}
