import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Usluge } from '../models/usluge.model';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.page.html',
  styleUrls: ['./usluge.page.scss'],
})
export class UslugePage implements OnInit {

  categories: Category[] =[];
  usluge:Usluge[]=[];
  
  constructor(private uslugeService:UslugeService) { }

  ngOnInit() {
    this.getCategories();
    this.usluge=this.uslugeService.getUsluge();
  }

  getCategories(){
    this.categories=[
      {
        id:1,
        label:'All',
        image:'/assets/fruits.png',
        active:true,
      },
      {
        id:2,
        label:'Burgers',
        image:'/assets/fruits.png',
        active:false,
      },
      {
        id:3,
        label:'Dishes',
        image:'/assets/fruits.png',
        active:false,
      },
      {
        id:4,
        label:'Sushi',
        image:'/assets/fruits.png',
        active:false,
      },

    ];

  }

}
