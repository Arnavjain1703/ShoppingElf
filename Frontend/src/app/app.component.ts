import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
loader=false ;
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

}