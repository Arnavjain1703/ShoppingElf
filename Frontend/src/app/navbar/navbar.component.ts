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
  this.serverService.getallProducts(1);
  this.serverService.GetCategory1(1);

  
}

womenProducts()
{
  this.serverService.getallProducts(2)
  this.serverService.GetCategory1(2)

}

kidsProducts()
{
  this.serverService.getallProducts(3)
  this.serverService.GetCategory1(3);

}

remove()
{
  this.serverService.loggOut();
}

}
