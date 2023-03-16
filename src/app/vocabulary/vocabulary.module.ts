import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyMenuComponent } from './vocabulary-menu/vocabulary-menu.component';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyGameComponent } from './vocabulary-game/vocabulary-game.component';



@NgModule({
  declarations: [
    VocabularyMenuComponent,
    VocabularyListComponent,
    VocabularyGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VocabularyModule { }
