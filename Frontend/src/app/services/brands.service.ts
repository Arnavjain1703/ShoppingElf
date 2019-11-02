import {  Subject } from 'rxjs';


export class BrandsService {
    brandsChanged= new Subject<string[]>();
  private  brands:string[]=
    [
        ('allians'),
        ('arnav'),
    ]
        
     getBrands()
     {
      return  this.brands.slice();
        
     }

     
     addBrand(brand:string)
     {
        this.brands.push(brand);
        this.brandsChanged.next(this.brands.slice());

     }
     deleteBrand(index:number)
     {
       
        this.brands.splice(index,1);
        this.brandsChanged.next(this.brands.slice());
     }
}
