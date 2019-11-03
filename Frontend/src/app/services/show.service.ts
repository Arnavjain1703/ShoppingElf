import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';
import { Price } from '../shared/price.module';
import { ThrowStmt } from '@angular/compiler';


export class ShowService
{
  
 AllChanged= new Subject<boolean>();
 BrandChanged =new Subject<string>();
 PriceChanged= new Subject<Price>();
 ShowBrand= new Subject<boolean>();
 ShowPrices= new Subject<boolean>();



 private show:boolean;
 private Brand:string="hello";
 private price:Price;
 private showBrand:boolean;
 private showPrices:boolean;


 
     
 

 change()
 {
     this.show=false;
     this.showBrand=false;
     this.AllChanged.next(this.show);
     this.ShowBrand.next(this.showBrand);
     
 }
 all()
 {
     this.show=true;
     this.AllChanged.next(this.show);
 }
 changeBrand(brand:string)
 {
     this.Brand=brand;
     this.BrandChanged.next(this.Brand);
 }
 
 AllBrand()
{
        this.showBrand=true;
        this.ShowBrand.next(this.showBrand);

}
AllPrices()
{
    this.showPrices=true;
    this.ShowPrices.next(this.showPrices);
}
 
 true()
 {
    this.show=false;
    this.AllChanged.next(this.show);
 }
 priceChanged(price:Price)
 {  
     
       this.price=price;
       this.PriceChanged.next(this.price);
       this.showPrices=false;
       this.ShowPrices.next(this.showPrices);
       this.show=false;
       this.AllChanged.next(this.show);
       
 }

 


}