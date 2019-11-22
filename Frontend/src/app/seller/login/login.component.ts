import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { ServerService } from 'src/app/services/server.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SellerLoginComponent implements OnInit {
   click=false;
   tk:any;
  constructor(private serverService:ServerService,
              private appComponent:AppComponent,
              private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {        
       this.appComponent.loaders();
 this.click=true;
  
   const value = form.value;
    
    this.serverService.sellerlogin(value.email,value.password)
    .subscribe(
      (response) =>
       {      
             this.tk=response;
            console.log(this.tk);
          localStorage.setItem('token2',this.tk);
          this.router.navigate(['/sellerProduct']);
          this.appComponent.loaderOff();
  
       },
       (error) =>
       {
         this.appComponent.WarningModel(error.error);
       }                                                
         
    );
   
    this.appComponent.loaderOff();
  
    
  }

}
