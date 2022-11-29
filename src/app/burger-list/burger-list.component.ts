import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../burger-cart.service';
import {Burger} from "./Burger";
@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  burgers: Burger[]= [
    {
      name:'Corte Semana',
      price:1300,
      image:"assets/img/5ROAYTPAJRCQZHZHNTIZ5CBIUI.jpeg",
      ingredients:"Doble carne, salsa de palta y huevo, incluye papas fritas",
      stock:12,
      offer:false,
      quantify:0,
    },
    {
      name:'Finde XXL',
      price:1500,
      image:"assets/img/hamburguesa765903bdop.jpg",
      ingredients:"Doble carne, doble cheedar, queso y tocino, incluye papas fritas",
      stock:0,
      offer:true,
      quantify:0,
    },
    {
      name:'Tranqui panki',
      price:900,
      image:"assets/img/istockphoto-1177547192-612x612.jpg",
      ingredients:"Carne y doble queso, incluye papas fritas",
      stock:44,
      offer:false,
      quantify:0,
    }
  ];

  constructor(private cart:BurgerCartService) {
   }

  ngOnInit(): void {
  }
  addToCart(burger: Burger):void{
    this.cart.addToCart(burger);
    burger.stock-=burger.quantify;
    burger.quantify=0;
  }
  maxReached(m:string){
    alert(m);
  }
}
