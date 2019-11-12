export class Order {
    
OrderId:number;
UserID:number;
productBrand:string;
ProductName:string;
productPrice:number;
productSize:string;
productPicture:string;
productQuantity:number;

constructor(
  productBrand:string, productName:string,productPrice:number,productSize:string,prouctPicture:string,productQuantity:number
){


 this.productBrand=productBrand;
 this.ProductName=productName;
 this.productPrice=productPrice;
 this.productSize=productSize;
 this.productPicture=prouctPicture;
 this.productQuantity=productQuantity;


}




}