import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../burger-cart.service';
import { Burger } from '../burger-list/Burger';

@Component({
  selector: 'app-burger-car',
  templateUrl: './burger-car.component.html',
  styleUrls: ['./burger-car.component.css']
})
export class BurgerCarComponent implements OnInit {

  burgerList: Burger[]=[];
  constructor(private cart:BurgerCartService) {
  }
    ngOnInit(): void {
      this.cart.items.subscribe((view: Burger[]) =>this.burgerList = view);
    }
  
    emptyToCart(burger: any){
      console.log(this.burgerList);
      this.cart.emptyToCart(burger);
      burger.quantify=0;
      console.log(this.burgerList);
    }

}
