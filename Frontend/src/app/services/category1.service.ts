
import { Subject } from 'rxjs';
import { Category } from '../shared/category.model';

export class Category1Service
{
   

    category1Changed= new Subject<Category[]>();

    private category1:Category[]=
    [
         new Category(1,'footware',1),
               
    ]

    getCategories()
    {
      return  this.category1.slice();
    }
         
    // addCategory( category:Category)
    // {
    //     this.category1.push(category);
    //     this.category1Changed.next(this.category1.slice())
        
    // }       

    // deleteCategories(index:number)
    // {
    //     this.category1.slice(index,1)
    //     this.category1Changed.next(this.category1.slice())

    // }
    // Update(index:number,category:string)
    // { 
    //     this.category1[index]=category;
    //     this.category1Changed.next(this.category1.slice())


         
    // }
    SetService(category:Category[])
    {
        this.category1=category;
        this.category1Changed.next(this.category1.slice())
    }

}