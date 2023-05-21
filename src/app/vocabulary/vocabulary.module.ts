import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyMenuComponent } from './vocabulary-menu/vocabulary-menu.component';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { VocabularyGameComponent } from './vocabulary-game/vocabulary-game.component';
import { RouterModule, Routes } from '@angular/router';
import { vocabularyRoutes } from 'src/routes/routes';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    VocabularyMenuComponent,
    VocabularyListComponent,
    VocabularyGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vocabularyRoutes),
    ButtonModule
  ]
})
export class VocabularyModule { }
