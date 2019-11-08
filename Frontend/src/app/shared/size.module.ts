import { Product } from './product.module';

 export class ProductSize {
  PID:number;
  productSize:string;
  ProductQuantity:number;
  ProductId:number;
  producPrice:number;
  ProductModel:Product[];
 
  constructor(productSize:string,productPrice:number,ProductModel:Product[])
    {
        this.producPrice=productPrice;
        this.productSize=productSize;
        this.ProductModel=ProductModel;

    }

}

