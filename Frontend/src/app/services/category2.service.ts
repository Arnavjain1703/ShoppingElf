
import { Subject } from 'rxjs';
import { SubCategory } from '../shared/SubCategory.model';

export class Category2Service
{

    category2Changed= new Subject<SubCategory[]>();

    private category2:SubCategory[]=
    [
        
           new SubCategory (1,'arnav',2),       
    ]

    getCategories()
    {
      return  this.category2.slice();
    }
         
    addCategory( category:SubCategory)
    {
        this.category2.push(category);
        this.category2Changed.next(this.category2.slice())
    }       

    deleteCategories(index:number)
    {
        this.category2.slice(index,1)
        this.category2Changed.next(this.category2.slice())

    }
    SetService(category:SubCategory[])
    {
        this.category2=category
        this.category2Changed.next(this.category2.slice())

    }

}