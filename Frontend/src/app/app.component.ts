import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

srcs="/assets/tic.png"
sentence="hello verification done" 
loader=false ;
model=false;
success=false;
warning=false;

  ngOnInit() {
   
}
loaders()
{
  this.loader=true;
  
}
loaderOff()
{
  this.loader=false;
}



SuccessModel( sentence:string)
{
  this.srcs="/assets/tic.png";
  this.sentence=sentence;
  this.model=true;
  this.success=true;
  this.warning=false;

}
// InfoModel( sentence:string)
// {
//   this.srcs="/assets/tic.png";
//   this.sentence=sentence;
//   this.model=true;

// }
WarningModel( sentence:string)
{
  this.srcs="/assets/cross.png";
  this.sentence=sentence;
  this.model=true;
  this.warning=true;
  this.success=false;

}
remove()
{
  this.model=false;
}

}

