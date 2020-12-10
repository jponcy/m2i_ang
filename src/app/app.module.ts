import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list/filter/game-list-filter.component';
import { GameListActionsComponent } from './game-list/actions/game-list-actions.component';
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    GameListActionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
