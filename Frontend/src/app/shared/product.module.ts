export class Product
{
    ProductID:number;

    public productName:string;
    public productDetails:string;
    public picture1:string;
    public picture2:string;
    public picture3:string;
    public picture4:string;
    public productPrice:number;
    public productBrand:string;
    public SubCategoryID:number;
    public SellerID:number;
    
    
    





constructor(productName:string,productPrice:number,picture1:string ,picture2:string,picture3:string,picture4:string
           
           ,productDetails:string,productBrand:string)
 
           {
                this.productName=productName;
                this.productBrand=productBrand;
                this.picture1=picture1;
                this.picture2=picture2;
                this.picture3=picture3;
                this.picture4=picture4;
                this.productDetails=productDetails;
                this.productPrice=productPrice;


           }
}
