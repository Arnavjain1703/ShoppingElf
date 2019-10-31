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
  this.order.OrderQ=this.order.OrderQ+1;
  console.log(this.quantity);
  this.order.productTotal=this.order.OrderQ*this.order.productPrice;
}

subtract()
{
  this.order.OrderQ=this.order.OrderQ-1;
  this.order.productTotal=this.order.OrderQ*this.order.productPrice;

  
  
}


}
