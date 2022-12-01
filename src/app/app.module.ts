import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BurgerAboutComponent } from './burger-about/burger-about.component';
import { BurgerHamburgerComponent } from './burger-hamburger/burger-hamburger.component';
import { BurgerCarComponent } from './burger-car/burger-car.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerAboutComponent,
    BurgerHamburgerComponent,
    BurgerCarComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
