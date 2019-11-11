import { Component, OnInit, Input } from '@angular/core';
import { SubCategory } from 'src/app/shared/SubCategory.model';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-product-category2',
  templateUrl: './product-category2.component.html',
  styleUrls: ['./product-category2.component.css']
})
export class ProductCategory2Component implements OnInit {


  @Input() Index:number;
  @Input() category2 :SubCategory;
  constructor( private serverService:ServerService
    ) { }

  ngOnInit() {
  }

  Products()
  {
    this.serverService.CategoryProducts(this.category2.SubCategoryID);
  }

}
