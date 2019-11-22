import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ServerService } from 'src/app/services/server.service';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-uplode',
  templateUrl: './photo-uplode.component.html',
  styleUrls: ['./photo-uplode.component.css']
})
export class PhotoUplodeComponent implements OnInit {

  tk:any;
  navigate=false;
  productID:number
  selectedFile:File = null;
  paramsubscription:Subscription
  image1:any="/assets/image.png";
  image2:any="/assets/image.png";
  image3:any="/assets/image.png";
  image4:any="/assets/image.png";
  i=0;
  constructor(private appComponent:AppComponent,
              private serverService:ServerService,
              private route:ActivatedRoute,
              private Router:Router
              ) { }

  ngOnInit() {

    this.paramsubscription=this.route.params
     
     .subscribe(
       (params:Params)=>
       {
         this.productID=+params['id']
       }
     )
  }


  onFileSelected(event){
    this.selectedFile =<File>event.target.files[0]

    console.log(event.target.files[0].name);
  }

  onUplode1()
  {   this.appComponent.loaders();
     const fd =new FormData();
     fd.append('image',this.selectedFile,this.selectedFile.name);
     console.log(fd);

     this.serverService.uplode(fd,1,this.productID)
     .subscribe
    (
      (response)=>
      { 
         this.tk=response
         console.log(this.tk)
        this.appComponent.loaderOff();
        console.log(this.serverService.rootUrl)
        this.image1=this.serverService.rootUrl+this.tk;
        console.log(this.image1);
        this.i=this.i+1;
        console.log(this.i);
        if(this.i >3)
        {
          this.navigate=true;
           
        }
      },
      (error)=>
      {
        console.log(error);
        this.appComponent.loaderOff();
      }
    )
    
     
  }
  onUplode2()
  {   this.appComponent.loaders();
     const fd =new FormData();
     fd.append('image',this.selectedFile,this.selectedFile.name);
     console.log(this.productID);
     this.serverService.uplode(fd,2,this.productID)
     .subscribe
    (
      (response)=>
      { 
         this.tk=response
         console.log(this.tk)
        this.appComponent.loaderOff();
        console.log(this.serverService.rootUrl)
        this.image2=this.serverService.rootUrl+this.tk;
        this.i=this.i+1;
        console.log(this.i);
        if(this.i>3)
        {
          this.navigate=true;
           
        }
      },
      (error)=>
      {
        console.log(error);
        this.appComponent.loaderOff();
      }
    )
    
     
  }
  onUplode3()
  {   this.appComponent.loaders();
     const fd =new FormData();
     fd.append('image',this.selectedFile,this.selectedFile.name);
     console.log(this.productID);
     this.serverService.uplode(fd,3,this.productID)
     .subscribe
    (
      (response)=>
      { 
         this.tk=response
         console.log(this.tk)
        this.appComponent.loaderOff();
        console.log(this.serverService.rootUrl);
        this.image3=this.serverService.rootUrl+this.tk;
        this.i=this.i+1;
        if(this.i>3)
        {
          this.navigate=true;
          
        }
      },
      (error)=>
      {
        console.log(error);
        this.appComponent.loaderOff();
      }
    )
    
     
  }
  onUplode4()
  {   this.appComponent.loaders();
     const fd =new FormData();
     fd.append('image',this.selectedFile,this.selectedFile.name);
     console.log(this.productID);
     this.serverService.uplode(fd,4,this.productID)
     .subscribe
    (
      (response)=>
      { 
         this.tk=response
        
        this.appComponent.loaderOff();
        this.image4=this.serverService.rootUrl+this.tk;
        this.i=this.i+1;
        if(this.i>3)
        {
            this.navigate=true;
        }
      },
      (error)=>
      {
        console.log(error);
        this.appComponent.loaderOff();
      }
    )
    
     
  }
   move()
   {
     alert('sdkcn');
       
      this.Router.navigate(['/size/'+this.productID])

   }

}
