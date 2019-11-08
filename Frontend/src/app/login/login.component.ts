import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
tk:any;
click=false;
  constructor(private serverService:ServerService){}


  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {        
    
 this.click=true;
  
   const value = form.value;
    
    this.serverService.login(value.email,value.password)
   
    
  
    
  }
}
