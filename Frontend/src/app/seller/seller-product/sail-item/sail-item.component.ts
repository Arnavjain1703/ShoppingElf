import { Component, OnInit, Input } from '@angular/core';
import { Sail } from 'src/app/shared/sellersails.module';

@Component({
  selector: 'app-sail-item',
  templateUrl: './sail-item.component.html',
  styleUrls: ['./sail-item.component.css']
})
export class SailItemComponent implements OnInit {

  constructor() { }

  @Input () Sail:Sail;
  @Input () index:number;
  ngOnInit() {
  
  }

}
