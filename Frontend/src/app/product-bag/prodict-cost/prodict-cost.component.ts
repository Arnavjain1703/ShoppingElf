import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product.module';
@Component({
  selector: 'app-prodict-cost',
  templateUrl: './prodict-cost.component.html',
  styleUrls: ['./prodict-cost.component.css']
})
export class ProdictCostComponent implements OnInit {

  
  @Input () order:Product;

 @Input() index:number;
 
@Input () total:number;

  constructor() { }

  ngOnInit() {
    

  }

  
}
