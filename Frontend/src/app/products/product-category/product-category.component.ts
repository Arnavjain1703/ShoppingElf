import { Component, OnInit,Input, } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  
  @Input() category:string;
  @Input() index:number;
   
  category2Subscription:Subscription;
   
   categories2:string[]
  constructor(
  ) { }

  
  ngOnInit() {
  }

}
