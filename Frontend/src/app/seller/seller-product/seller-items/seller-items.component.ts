import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';

@Component({
  selector: 'app-seller-items',
  templateUrl: './seller-items.component.html',
  styleUrls: ['./seller-items.component.css']
})
export class SellerItemsComponent implements OnInit {


  @Input () product:Product;
  @Input () index:number;
   display=false;
  constructor() { }

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
}
