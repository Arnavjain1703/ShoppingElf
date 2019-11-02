import { Subject } from 'rxjs';
import { Price } from '../shared/price.module';

export class PriceService
{
    priceChanged = new Subject<Price[]>()

    private Prices:Price[]=
    [
        new Price (100,1000),
        new Price (1000 , 2000),
        new Price ( 2000 ,3000),
        new Price (3000 ,4000)

    ];

    getPrices()
    {
         return this.Prices.slice()
    }
    addPrices(prices:Price)
    {
             this.Prices.push(prices)
             this.priceChanged.next(this.Prices.slice());
    }
    deletePrices(index:number)
    {
        this.Prices.splice(index,1);
    }
}