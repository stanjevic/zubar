import { Injectable } from "@angular/core";
import { Usluge } from "../models/usluge.model";

@Injectable({
    providedIn:'root'
})

export class UslugeService{
   getUsluge():Usluge[]{
       return [
           {
               id:1,
               title:'Sea food',
               price:12,
               image:'/assets/fruits.png',
               description:'In adition there are stupid things and etc boring hope it works!'
                
           },
           {
            id:2,
            title:'Neka food',
            price:15,
            image:'/assets/fruits.png',
            description:'In adition there are stupid things and etc boring hope it works!'
             
        },
        {
            id:3,
            title:'Strasna food',
            price:158,
            image:'/assets/fruits.png',
            description:'In adition there are stupid things and etc boring hope it works!'
             
        },
       ];
   }

   getUsluga(id:number):Usluge{
       return this.getUsluge().find((usluge)=>usluge.id==id);
   }
}