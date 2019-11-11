import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
tk:any;
click=false;
  constructor(private serverService:ServerService,
               private appComponent:AppComponent,
               private route:Router){}


  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {        
    
 this.click=true;
  
   const value = form.value;
    this.appComponent.loaders();
    this.serverService.login(value.email,value.password)
    .subscribe(
      (response) =>
       {      
             this.tk=response;
            console.log(this.tk);
          localStorage.setItem('token',this.tk);
          this.appComponent.loaderOff();
          this.route.navigate(['/frontpage'])

       } ,
       (error)=>
       
       {
         console.log(error);
        this.appComponent.WarningModel(error.error);
        this.appComponent.loaderOff();


       }                                             
         
    );
    
   
    
  
    
  }
}
