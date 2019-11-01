
import { Subject } from 'rxjs';

export class Category2Service
{

    category2Changed= new Subject<string[]>();

    private category2:string[]=
    [
        ('arnav'),
        ('jain')       
    ]

    getCategories()
    {
      return  this.category2.slice();
    }
         
    addCategory( category:string)
    {
        this.category2.push(category);
        this.category2Changed.next(this.category2.slice())
    }       

    deleteCategories(index:number)
    {
        this.category2.slice(index,1)
        this.category2Changed.next(this.category2.slice())

    }

}