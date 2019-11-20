import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';
import { Product } from '../shared/product.module';

export class  SizeService
{
number:any;

 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

       
                   new ProductSize('s',12,22),

                   new ProductSize('s',12,22),

                   new ProductSize('s',12,22),
                   new ProductSize('s',12,22),
                   new ProductSize('s',12,22),
                   new ProductSize('s',12,22),
                   new ProductSize('s',12,22),

                

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
{     this.number=index-1
    this.Size.splice(this.number,1);
     this.AllSize.next(this.Size.slice());

}

setSize( Size:ProductSize[] )
{
      this.Size=Size;
      this.AllSize.next(this.Size.slice());
}
}

