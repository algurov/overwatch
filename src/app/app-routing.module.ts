import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {HeroComponent} from './hero/hero.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'hero/:id', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
