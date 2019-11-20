import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/Forms';
import { ServerService } from '../services/server.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-address-pannel',
  templateUrl: './address-pannel.component.html',
  styleUrls: ['./address-pannel.component.css']
})
export class AddressPannelComponent implements OnInit {
    
  
    index:number;
    hello:string;
    id:number;
    tk:any;
    editMode:any;
    constructor( private serverService:ServerService,
                  private route:ActivatedRoute,
                  private appComponent:AppComponent) { 
  }

  ngOnInit() {
  
    this.route.params.subscribe( (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      console.log(this.editMode); 
  }
    )
}


  onSubmit(form:NgForm)
  {

     console.log(form.valid)
      const value=form.value;
      this.serverService.address(value.AddressLine1,value.AddressLine2,value.Pincode,value.city,value.State)
      .subscribe
      (
        (response)=>
        {
          console.log(response);
        }
      )
      
     
      if(!this.editMode)
      {
        this.appComponent.loaders()
        this.serverService.AllOrder()
        .subscribe(
          (response)=>
          {  this.tk=response
            this.appComponent.SuccessModel(this.tk);
            this.appComponent.loaderOff();
      
            
     
          }
        )
            
      }

      if(this.editMode)
      {
        this.appComponent.loaders()

         this.serverService.oneOrder(this.id)
        .subscribe(
           (response)=>
           {
             this.appComponent.loaderOff();
             this.tk=response
             this.appComponent.SuccessModel(this.tk)
           }
        )
    
      }


  }


}
