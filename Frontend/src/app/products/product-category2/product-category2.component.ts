import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/shared/SubCategory.model';

@Component({
  selector: 'app-product-category2',
  templateUrl: './product-category2.component.html',
  styleUrls: ['./product-category2.component.css']
})
export class ProductCategory2Component implements OnInit {

  constructor() { }

  @Input() Index:number;
  @Input() category2 :SubCategory;
  ngOnInit() {
  }

}
