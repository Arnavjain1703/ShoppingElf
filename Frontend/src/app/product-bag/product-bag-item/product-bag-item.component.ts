import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor(private productBagService:ProductBagService) { }
 @Input () order:Product;

 @Input() index:number;

  quantity=0;


  ngOnInit() {
  }

remove()
{
  this.productBagService.deleteorder(this.index);
}

add()
{
  this.quantity=this.quantity+1;
  console.log(this.quantity);
}

subtract()
{
  this.quantity=this.quantity-1;
  
}
}
