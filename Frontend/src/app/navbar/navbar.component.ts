import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  display=false;
  tk:any;
  constructor(private serverService :ServerService) { }

  ngOnInit() {
  }
Ondisplay()
{
   this.display=!this.display
}
 
menProducts()
{
  this.serverService.getallMenProducts();
  this.serverService.GetCategory1();

  
}

womenProducts()
{
  this.serverService.getallWomenProducts()
}

kidsProducts()
{
  this.serverService.getallKidsProducts()
}

remove()
{
  this.serverService.loggOut();
}

}
