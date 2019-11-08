import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';

export class  SizeService
{


 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

        new ProductSize ('sdnvjo',10,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','arnav',23,'x'),


                

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

