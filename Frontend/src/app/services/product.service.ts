import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';

export class ProductService

{


    ProductChanged=new Subject<Product[]>();
    
    private products:Product[]=[

        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),
        new Product ('sdnvjo',456,'/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','/assets/Women 8.jpg','wdjbc','wkebviw'),

    ]

    getProducts()
    {
        return this.products.slice()
    }

    addProducts(product:Product)
    {
        this.products.push(product);
        this.ProductChanged.next(this.products.slice())
    }
    updateProduct(index:number,newProduct:Product)
    {
        this.products[index]=newProduct;
        this.ProductChanged.next(this.products.slice())

    }
    deleteProduct(index:number)
    {
         this.products.splice(index,1);
        this.ProductChanged.next(this.products.slice())

    }

     
 
}