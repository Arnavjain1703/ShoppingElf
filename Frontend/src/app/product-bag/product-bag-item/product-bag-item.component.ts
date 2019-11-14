import { Component, OnInit,Input } from '@angular/core';
import { ProductBagService } from 'src/app/services/product-bag.service';
import { ProductBagComponent } from '../product-bag.component';
import { Bag } from 'src/app/shared/bag.model';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor( private BagService :ProductBagService,
                private BagComponenet:ProductBagComponent,
                private serverService:ServerService) { }
                
                
 @Input () order:Bag;

 @Input() index:number;

   i:number;
   number:number
   indx:number;            
     dropdown=false;
     name:any;
     

  ngOnInit() {
    // this.order.productTotal=0;
    // this.order.OrderQ=1
    

    this.order.Total=this.order.SizeModel.productPrice*this.order.Quantity;
    

  }

  drop()
  {
   this.dropdown=true;
  }
  call(i:number)
  {
    this.order.Quantity=i;
    this.dropdown=false;
    this.order.Total=this.order.SizeModel.productPrice*this.order.Quantity;
    this.serverService.upQuantity(this.order.CartID,i)
    .subscribe(
      (response) =>
      {
        console.log(response);
      },
      (error) =>
      {
        console.log(error);
      }
    )
    this.BagComponenet.Total();

  }
  num(index:number)
{

  
  this.indx=index;
   
}

delete()
{
  this.BagService.delete(this.index)
  this.BagComponenet.Total();
  this.serverService.Delete(this.order.CartID)
  .subscribe
  (
    (response)=>
    {
      console.log(response)
    }
  )

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
