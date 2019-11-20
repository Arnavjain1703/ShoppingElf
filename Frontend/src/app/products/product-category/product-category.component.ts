import { Component, OnInit,Input,  } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Category } from 'src/app/shared/category.model';
import { Category2Service } from 'src/app/services/category2.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  
  @Input() category:Category;
  @Input() index:number;
   tk:any;
   
  constructor( private serverService:ServerService,
               private CategoryService2:Category2Service,
               private appComponent:AppComponent,
  ) { }

  
  ngOnInit() {
  }

  hello()

  {   this.appComponent.loaders();
      this.serverService.GetCategory2(this.category.CategoryID)
      .subscribe(
        response=>
        {  this.appComponent.loaderOff()
          console.log(response)
          this.tk=response;
          this.CategoryService2.SetService(this.tk)
        },
         error=>
         {
            this.appComponent.loaderOff();
           console.log(error)
         }
      )
      
  }

}
