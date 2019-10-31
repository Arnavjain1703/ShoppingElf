import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import { ProductBagComponent } from '../product-bag.component';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor(private productBagService:ProductBagService,
                private productComponent:ProductBagComponent) { }
 @Input () order:Product;

 @Input() index:number;

   i:number;
   number:number

  ngOnInit() {
    this.order.productTotal=0;
  }

remove()
{
  this.productComponent.Delete(this.index);

  this.productBagService.deleteorder(this.index);

}

add()
{
  this.order.OrderQ=this.order.OrderQ+1;
  this.order.productTotal=this.order.OrderQ*this.order.productPrice;
  this.productComponent.Total();
  
}

subtract()
{
  this.order.OrderQ=this.order.OrderQ-1;
  this.order.productTotal=this.order.OrderQ*this.order.productPrice;
  this.productComponent.Total();

  
  
}


}
