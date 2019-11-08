import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { ProductBagService } from 'src/app/services/product-bag.service';
import { ProductBagComponent } from '../product-bag.component';
import { ProductSize } from 'src/app/shared/size.module';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor(private productBagService:ProductBagService,
                private productComponent:ProductBagComponent,
                private productSize:SizeService) { }
                
                
 @Input () order:Product;

 @Input() index:number;

   i:number;
   number:number
   indx:number;
  Size:ProductSize[];
  productsize:any;            


  ngOnInit() {
    // this.order.productTotal=0;
    // this.order.OrderQ=1
    this.Size=this.productSize.getSize();
  

  }

  num(index:number)
{

  
  this.indx=index;
   
}

 

remove()
{
  this.productComponent.Delete(this.index);

  this.productBagService.deleteorder(this.index);

}

add()
{
  // this.order.OrderQ=this.order.OrderQ+1;
  // this.order.productTotal=this.order.OrderQ*this.order.productPrice;
  this.productComponent.Total();
  
}

subtract()
{
  // this.order.OrderQ=this.order.OrderQ-1;
  // this.order.productTotal=this.order.OrderQ*this.order.productPrice;
  this.productComponent.Total();

  
  
}



   

}
