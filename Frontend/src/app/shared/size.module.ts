import { Product } from './product.module';

 export class ProductSize {
  PID:number;
  productSize:string;
  ProductQuantity:number;
  ProductID:number;
  productPrice:number;
  ProductModel:Product;
 
  constructor(productSize:string,productPrice:number)
    {
        this.productPrice=productPrice;
        this.productSize=productSize;
        



    }

}

