import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyListComponent } from './vocabulary/vocabulary-list/vocabulary-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VocabularyGameComponent } from './vocabulary/vocabulary-game/vocabulary-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VocabularyComponent,
    VocabularyListComponent,
    VocabularyGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
