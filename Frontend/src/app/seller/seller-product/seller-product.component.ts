import { Component, OnInit } from '@angular/core';
import { sellerService } from 'src/app/services/sellerProduct.service';
import { Product } from 'src/app/shared/product.module';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {

products:Product[];
  constructor( private sellerService:sellerService) { }

  ngOnInit() {
   this.sellerService.ProductChanged
   .subscribe((products:Product[])=>
    {
      this.products=products;
    })

   this.products=this.sellerService.getProducts();

  }

}
