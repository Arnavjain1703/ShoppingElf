import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/Forms';
 import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   constructor(private serverService:ServerService) { }

  ngOnInit() {
  }

  display()
  {
    console.log("jwfnjnf");
  }

  onSubmit(form:NgForm)
  {
    const value =form.value;
    console.log(value);

   this.serverService.signup(value.yourName,value.phoneNumber,value.email,value.password,value.confirmPassword)
   .subscribe(
     (response)=>
     {
       console.log(response);
     }
   )
    
      
  }


}
