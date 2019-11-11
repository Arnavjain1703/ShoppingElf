import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import { ProductBagComponent } from '../product-bag.component';
import { ProductSize } from 'src/app/shared/size.module';
import { SizeService } from 'src/app/services/size.service';
import { Bag } from 'src/app/shared/bag.model';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor(
              
                ) { }
                
                
 @Input () order:Bag;

 @Input() index:number;

   i:number;
   number:number
   indx:number;            
     dropdown=false;

  ngOnInit() {
    // this.order.productTotal=0;
    // this.order.OrderQ=1
    console.log(this.order)

  }

  drop()
  {
   this.dropdown=true;
  }
  call(i:number)
  {
    this.order.Quantity=i;
    this.dropdown=false;
  }
  num(index:number)
{

  
  this.indx=index;
   
}

 

// remove()
// {
//   this.productComponent.Delete(this.index);

//   this.productBagService.deleteorder(this.index);

// }

// add()
// {
//   // this.order.OrderQ=this.order.OrderQ+1;
//   // this.order.productTotal=this.order.OrderQ*this.order.productPrice;
//   this.productComponent.Total();
  
// }

// subtract()
// {
//   // this.order.OrderQ=this.order.OrderQ-1;
//   // this.order.productTotal=this.order.OrderQ*this.order.productPrice;
//   this.productComponent.Total();

  
  
// }



   

}
