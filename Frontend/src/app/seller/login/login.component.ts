import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SellerLoginComponent implements OnInit {
   click=false;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {        
    
 this.click=true;
  
   const value = form.value;
    
    this.serverService.sellerlogin(value.email,value.password)
   
    
  
    
  }

}
