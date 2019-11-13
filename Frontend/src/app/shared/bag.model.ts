import { ProductSize } from './size.module';

export class  Bag
{
    CartID:number;
    UserID:number;
    PID:number;
    SizeModel:ProductSize;
    Total:number;
    Quantity:number;
  


     constructor(ProductName:String,ProductBrand:string,ProductPrice:number,Picture1:String,Quantity:number)
        {
            // this.ProductBrand=ProductBrand;
            // this.Picture1=Picture1;
            // this.ProductName=ProductName;
            // this.Quantity=Quantity;
            // this.ProductPrice=ProductPrice

        }
}