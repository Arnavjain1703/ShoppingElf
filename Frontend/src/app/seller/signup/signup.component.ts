import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { NgForm } from '@angular/Forms';
import { OtpComponent } from '../otp/otp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  constructor( private serverService:ServerService,
                private  otpComponent:OtpComponent,
                private route:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    const value =form.value;
    console.log(value);
    

   this.serverService.sellersignup(value.yourName,value.mobileNumber,value.email,value.password,value.confirmPassword)
   .subscribe(
    response=>
    {  
      
   console.log(response);
   this.route.navigate(['seller/otp'])
     
  
    },
     error=> {
       console.log(error);
     }

  )
   
}

}
