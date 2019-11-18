import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';
import { Product } from '../shared/product.module';

export class  SizeService
{


 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

       

                

]
 

getSize()
{
    return this.Size.slice();
    

}

addSize(size:ProductSize)
{    
    this.Size.push(size)
    this.AllSize.next(this.Size.slice());

}

getsize(index:number)
{
    return this.Size[index];
}
delete(index:number)
{
    this.Size.splice(index,1);
    this.AllSize.next(this.Size.slice());

}

setSize( Size:ProductSize[] )
{
      this.Size=Size;
      this.AllSize.next(this.Size.slice());
}
}

