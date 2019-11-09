import { Product } from './product.module';

 export class ProductSize {
  PID:number;
  productSize:string;
  ProductQuantity:number;
  ProductID:number;
  productPrice:number;
  ProductModel:Product[];
 
  constructor(productSize:string,productPrice:number,productModel:Product[])
    {
        this.productPrice=productPrice;
        this.productSize=productSize;
        this.ProductModel=productModel;



    }

}

