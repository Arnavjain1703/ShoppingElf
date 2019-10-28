export class Product
{
    public productName:string;
    public productDetails:string;
    public productImage1:string;
    public productImage2:string;
    public productImage3:string;
    public productImage4:string;
    public productPrice:string;
    public productCompany:string;




constructor(productName:string,productDetails:string,productImage1:string ,productImage2:string,productImage3:string,productImage4:string
           
           ,productPrice:string,productCompany:string)
 
           {
                this.productName=productName;
                this.productCompany=productCompany;
                this.productImage1=productImage1;
                this.productImage2=productImage2;
                this.productImage3=productImage3;
                this.productImage4=productImage4;
                this.productDetails=productDetails;
                this.productPrice=productPrice;


           }
}