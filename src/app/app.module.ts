import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './demo/mon-composant/mon-composant.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list/game-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    GameListComponent,
    GameListFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
