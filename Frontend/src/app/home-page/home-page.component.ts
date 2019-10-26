import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello');
    const mynumbers= Observable.interval(1000);
    mynumbers.subscribe(
       (hello:number)=>
       {
         console.log(hello);
       }
    )


  }

}
