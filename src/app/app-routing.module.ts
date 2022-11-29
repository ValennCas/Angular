import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerHamburgerComponent } from './burger-hamburger/burger-hamburger.component';
import { BurgerAboutComponent } from './burger-about/burger-about.component';
const routes: Routes = [
 { path: '',redirectTo: 'burgers',pathMatch: 'full' },
 { path: 'burgers', component: BurgerHamburgerComponent },
 { path: 'about', component: BurgerAboutComponent },
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }