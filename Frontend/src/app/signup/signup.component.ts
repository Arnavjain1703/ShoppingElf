import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/Forms';
 import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
   constructor(private serverService:ServerService,
               private appComponent:AppComponent,
               private router:Router) { }
               tk:any;

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
 
   this.appComponent.loaders();
   
  //  this.appComponent.SuccessModel('kjbntnbtb');
  // this.appComponent.WarningModel('error');
 
   this.serverService.signup(value.yourName,value.phoneNumber,value.email,value.password,value.confirmPassword)
   .subscribe(

    
    response=>
    {  
      
   console.log(response);
   this.tk=response;
   this.appComponent.loaderOff();
   this.appComponent.SuccessModel(this.tk);
   this.router.navigate(['/login']);
      
    },
     error=> {
       console.log(error);
       this.appComponent.loaderOff();
       this.appComponent.WarningModel(error.error);

     }

  )
  
      
  }
 

}
