import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input () product:Product;
  @Input() index:number;
  display=false;
  constructor( private productBagService:ProductBagService) { }

  ngOnInit() {
  }



  call()
  {
    this.display=true;
  }
  uncall()
  {
    this.display=false;
  }

  orders()
  {
    this.productBagService.addorder(this.product);
  }
 
}


