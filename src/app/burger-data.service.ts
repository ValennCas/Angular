import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Burger } from './burger-list/Burger';

const ENDPOINT="https://6388a746d94a7e5040a2f78b.mockapi.io/api/burgers";
@Injectable({
  providedIn: 'root'
})
export class BurgerDataService {

  constructor(private http: HttpClient) { }

  public getEvery(): Observable<Burger[]>{
    return this.http.get<Burger[]>(ENDPOINT)
    .pipe(
      tap((burgers: Burger[])=>burgers.
          forEach(burger=>burger.quantify=0))
    );
  }
}
