
import { Subject } from 'rxjs';

export class Category1Service
{
   private  category:string;

    category1Changed= new Subject<string[]>();

    private category1:string[]=
    [
        ('arnav'),
        ('jain')       
    ]

    getCategories()
    {
      return  this.category1.slice();
    }
         
    addCategory( category:string)
    {
        this.category1.push(category);
        this.category1Changed.next(this.category1.slice())
    }       

    deleteCategories(index:number)
    {
        this.category1.slice(index,1)
        this.category1Changed.next(this.category1.slice())

    }

}