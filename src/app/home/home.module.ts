import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
