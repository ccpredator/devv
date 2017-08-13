import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
  {
    path: 'cars',
    component: CarsComponent,
    children: []
  },
  {
     path: '',
     component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
