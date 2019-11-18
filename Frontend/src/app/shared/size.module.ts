import { Product } from './product.module';

 export class ProductSize {
  PID:number;
  productSize:string;
  productQuantity:number;
  ProductID:number;
  productPrice:number;
  ProductModel:Product;
 
  constructor(productSize:string,productPrice:number,productQuantity:number)
    {
        this.productPrice=productPrice;
        this.productSize=productSize;
        this.productQuantity=productQuantity;
        



    }

}

