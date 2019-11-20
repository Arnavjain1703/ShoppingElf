import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }


  remove()
  {
    localStorage.removeItem('token2');
    
  }
}
