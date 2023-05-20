import { Routes } from '@angular/router';
import { VocabularyMenuComponent } from 'src/app/vocabulary/vocabulary-menu/vocabulary-menu.component';

export const appRoutes: Routes = [
    {
      path: 'vocabulary',
      loadChildren: () => import('../app/vocabulary/vocabulary.module').then(m => m.VocabularyModule)
    },
    {
      path: '',
      loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
    }
]

export const vocabularyRoutes: Routes = [
    {
      path: '',
      component: VocabularyMenuComponent,
    }
  ]