import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

timeLeft:number;
minut:number;
interval:any;

  constructor() { }

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

}
