import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';


export class ShowService
{
  
 AllChanged= new Subject<boolean>();
 BrandChanged =new Subject<string>();


 private show:boolean=true;
 private Brand:string="hello";
    

 getShow()
 {
     return this.show
 }
 getBrand()
 {
     return this.Brand
 }

 change()
 {
     this.show=false;
     this.AllChanged.next(this.show);
 }
 changeBrand(brand:string)
 {
     this.Brand=brand;
     this.BrandChanged.next(this.Brand);
 }
 true()
 {
    this.show=false;
    this.AllChanged.next(this.show);
 }


}