
export class Sail  {
    public SoldID:number;
    public SellerID:number;
    public productName:string;
    public productBrand:string;
    public productQuantity:number;
    public productPrice:number;
    public productSize:string;
    public productPicture:string;
    public UserName:string;
    public PID:number;

    constructor(productName:string,productPicture:string, productBrand:string,productQuantity:number,productPrice:number,productSize:string){
        this.productBrand=productBrand;
         this.productPicture=productPicture;
         this.productPrice=productPrice;
         this.productQuantity=productQuantity;
         this.productSize=productSize;
         this.productName=productName;
    }
}