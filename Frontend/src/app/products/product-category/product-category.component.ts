import { Component, OnInit,Input,  } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  
  @Input() category:Category;
  @Input() index:number;
   
   
  constructor( private serverService:ServerService
  ) { }

  
  ngOnInit() {
  }

  hello()

  {
      this.serverService.GetCategory2(this.category.CategoryID)
  }

}
