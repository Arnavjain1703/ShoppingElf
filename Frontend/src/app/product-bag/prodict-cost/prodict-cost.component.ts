import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
import { Bag } from 'src/app/shared/bag.model';

@Component({
  selector: 'app-prodict-cost',
  templateUrl: './prodict-cost.component.html',
  styleUrls: ['./prodict-cost.component.css']
})
export class ProdictCostComponent implements OnInit {

  
  @Input () order:Bag;

 @Input() index:number;
 
@Input () total:number;

  constructor() { }


  ngOnInit() {
    // this.price=this.order.SizeModel.productPrice;
    console.log(this.order.SizeModel.productPrice);
  
  }

  
}
