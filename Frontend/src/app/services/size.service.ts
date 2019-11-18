import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';
import { Product } from '../shared/product.module';

export class  SizeService
{


 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

       
         new ProductSize('x',300,1),
         new ProductSize('xl',400,2),
         new ProductSize('xxl',450,3),
         new ProductSize('Xv',500,4),

                

]
 

getSize()
{
    return this.Size.slice();
    

}

getsize(index:number)
{
    return this.Size[index];
}


setSize( Size:ProductSize[] )
{
      this.Size=Size;
      this.AllSize.next(this.Size.slice());
}
}

