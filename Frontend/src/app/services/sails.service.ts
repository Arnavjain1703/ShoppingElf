import { Subject } from 'rxjs';
import { Sail } from '../shared/sellersails.module';

export class sailService

{


    sailChanged=new Subject<Sail[]>();
    
    private products:Sail[]=[

        new Sail ('black Shirt','/assets/slider1.jpg','ola',26,117,'x'),
        new Sail ('black Shirt','/assets/slider1.jpg','ola',26,117,'x'),
        new Sail ('black Shirt','/assets/slider1.jpg','ola',26,117,'x')
        
    ]

    getProducts()
    {
        return this.products.slice()
    }
    setService(products:Sail[])
    {
        console.log(products);
        this.products=products;
        this.sailChanged.next(this.products.slice())
    }
}