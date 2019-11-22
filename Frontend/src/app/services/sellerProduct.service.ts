import { Subject } from 'rxjs';
import { Product } from '../shared/product.module';

export class sellerService

{


    ProductChanged=new Subject<Product[]>();
    
    private products:Product[]=[

       
    ]

    getProducts()
    {
        return this.products.slice()
    }

    getProduct(index:number)
    {
        return this.products.slice()[index];
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
    
    setService(products:Product[])
    {
        this.products=products;
        this.ProductChanged.next(this.products.slice());
    }

     
 
}