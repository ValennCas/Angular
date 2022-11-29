import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Burger } from '../burger-list/Burger';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantify!:number;
  
  @Input()
  max!:number;

  @Output()
  quantifyChange: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }
  upQuantify(): void{
    if(this.quantify<this.max){
      this.quantify++;
      this.quantifyChange.emit(this.quantify);
    }
    else{
      this.maxReached.emit("Se alcanzó el maximo de hamburguesas en el stock.");
    }
  }
  downQuantify(): void{
    if(this.quantify>0){
      this.quantify--;
      this.quantifyChange.emit(this.quantify);
    }
    else{
      this.maxReached.emit("Se debe ingresar un número mayor a cero.");
    }
  }
  changeQuantify(event: any): void{
    if(event.target.value>=0 && event.target.value<=this.max){
      this.quantify;
      this.quantifyChange.emit(this.quantify);
    }
    else if(event.target.value<0 || event.target.value=="-"){
      this.quantify=0;
      this.quantifyChange.emit(this.quantify);
      this.maxReached.emit("Ingrese un número mayor a cero.");
    }
    else if(isNaN(event.target.value)){
      this.maxReached.emit("Ingrese un número.");
    }
    else{
      this.quantify=this.max;
      this.quantifyChange.emit(this.quantify);
      this.maxReached.emit("Se alcanzó el maximo de hamburguesas en el stock.");
    }
  }
}
