import { Injectable } from '@angular/core';
import { BehaviorSubject, count, EMPTY, Observable } from 'rxjs';
import { Burger } from './burger-list/Burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerCartService {
  private _listBurger: Burger[] = [];
  listBurger: BehaviorSubject<Burger[]> = new BehaviorSubject(this._listBurger);
  public items: Observable<Burger[]> = this.listBurger.asObservable();
  burgerList: any;


  burgerStock: BehaviorSubject<Burger[]> = new BehaviorSubject(this._listBurger);
  public stocks: Observable<Burger[]> = this.burgerStock.asObservable();

  constructor(){}

  addToCart(burger: Burger) {
    let article= this._listBurger.find((selectedBurger)=> selectedBurger.name == burger.name);
    let item=Number(burger.quantify);
    if(item!=0){
      if(article){
        if(isNaN(article.quantify)){
          article.quantify+= item;
        }
        else{
          let itemArticle=Number(article.quantify);
          article.quantify=itemArticle;
          article.quantify+= item;
        }
      }
      else{
        this._listBurger.push({... burger});
      }
    }
    else{
      alert("Necesita seleccionar una cantidad para poder agregar al carrito");
    }
    console.log( this._listBurger);
    this.listBurger.next(this._listBurger);
  }
  emptyToCart(burger:Burger){
    let items=this._listBurger=[];
    this.listBurger.next(items);
  }
}
