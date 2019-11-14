import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { NgForm } from '@angular/Forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

timeLeft:number;
minut:number;
interval:any;
tk:any;

  constructor( 
     private serverService:ServerService,
     private route:Router,
     private appComponent:AppComponent
  ) { }

  ngOnInit() {

    clearInterval(this.interval);

    this.timeLeft=60;
   this.minut=1;
   
    this.interval = setInterval(() => {
     

      if(this.timeLeft > 0) {
        this.timeLeft--;
        
      } else {

        this.timeLeft=60;
        this.minut--;
          
      }
   if(this.minut<0)
   {
     alert('otp expired rresecd otp')
    clearInterval(this.interval);
      this.minut=1;
      this.timeLeft=60;
     
   }

    },1000)
  }



  pauseTimer() {
    clearInterval(this.interval);
    this.minut=1;
      this.timeLeft=60;
     
  }

  // OTP(num:number)
  // { 
  //  this.tk=num;
  //   localStorage.setItem('num' , this.tk)
  
  // }
  onSubmitotp(form:NgForm)
{
  const value =form.value;
  this.appComponent.loaders()
   
   this.serverService.SendOtp(value.OTP)
   .subscribe(
     (response)=>
     {
       console.log(response)
       this.tk=response
       {
        clearInterval(this.interval);
        this.minut=1;
          this.timeLeft=60;
         
      }
       localStorage.setItem('token2',this.tk);
       this.route.navigate(['seller/details'])
       this.appComponent.loaderOff

     }
     ,
     (error) =>
     {
       console.log(error.error.Message)
       this.appComponent.loaderOff();
     }
   )
    }
resendOtp()
{  this.appComponent.loaders()
    this.serverService.resendOtp()
  .subscribe(
    (response)=>
    {  this.tk=response
      console.log(this.tk)
      this.appComponent.loaderOff()
    },
     (error)=>
     {
       console.log(error);
       this.appComponent.loaderOff()

     }
    
  )
}

}
