
import { Subject } from 'rxjs';
import { Category } from '../shared/category.model';

export class Category2Service
{

    category2Changed= new Subject<Category[]>();

    private category2:Category[]=
    [
        
           new Category (1,'arnav',2),       
    ]

    getCategories()
    {
      return  this.category2.slice();
    }
         
    addCategory( category:Category)
    {
        this.category2.push(category);
        this.category2Changed.next(this.category2.slice())
    }       

    deleteCategories(index:number)
    {
        this.category2.slice(index,1)
        this.category2Changed.next(this.category2.slice())

    }
    SetService(category:Category[])
    {
        this.category2=category
        this.category2Changed.next(this.category2.slice())

    }

}