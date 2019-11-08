import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';

export class  SizeService
{


 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

        new ProductSize ('')


                

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
}
}

