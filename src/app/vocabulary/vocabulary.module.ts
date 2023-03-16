import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyMenuComponent } from './vocabulary-menu/vocabulary-menu.component';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyGameComponent } from './vocabulary-game/vocabulary-game.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: VocabularyMenuComponent,
  }
]

@NgModule({
  declarations: [
    VocabularyMenuComponent,
    VocabularyListComponent,
    VocabularyGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class VocabularyModule { }
