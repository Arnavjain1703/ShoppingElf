import { Subject } from 'rxjs';
import { ProductSize } from '../shared/size.module';
import { Product } from '../shared/product.module';

export class  SizeService
{


 AllSize= new Subject <ProductSize[]>();

private  Size:ProductSize[]=[

        new ProductSize ('x',17,
        
        [
            new Product ('sdnvjo',10,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','arnav'),

        ]),

        new ProductSize ('x',17,
        [
            new Product ('sdnvjo',10,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','arnav'),

        ]),

        new ProductSize ('x',17,[
            new Product ('sdnvjo',10,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','arnav'),

        ]),
        new ProductSize ('x',17,[
            new Product ('sdnvjo',10,'/assets/slider1.jpg','/assets/slider1.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','arnav'),

        ]),



                

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

