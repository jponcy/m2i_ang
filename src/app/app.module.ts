import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './demo/mon-composant/mon-composant.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list/filter/game-list-filter.component';
import { TodosComponent } from './demo/todos/todos.component';
import { InputOutputComponent } from './demo/input-output/input-output.component';
import { SubComponent } from './demo/input-output/sub.component';
import { GameListActionsComponent } from './game-list/actions/game-list-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    GameListComponent,
    GameListFilterComponent,
    TodosComponent,
    InputOutputComponent,
    SubComponent,
    GameListActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
