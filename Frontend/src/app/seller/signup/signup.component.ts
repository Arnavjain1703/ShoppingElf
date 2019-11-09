import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  constructor( private serverService:ServerService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    const value =form.value;
    console.log(value);
 

   this.serverService.sellersignup(value.yourName,value.mobileNumber,value.email,value.password,value.confirmPassword)
  
  }
}
