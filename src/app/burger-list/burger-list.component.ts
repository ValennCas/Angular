import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../burger-cart.service';
import { BurgerDataService } from '../burger-data.service';
import {Burger} from "./Burger";
@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers: Burger[]= [];

  constructor(private cart:BurgerCartService,
    private burgersData:BurgerDataService) {
   }

  ngOnInit(): void {
    this.burgersData.getEvery()
    .subscribe(data=>this.burgers =data);
  }
  addToCart(burger: Burger):void{
    this.cart.addToCart(burger);
    burger.stock-=burger.quantify;
    burger.quantify=0;
  }
  maxReached(message:string){
    alert(message);
  }
}
