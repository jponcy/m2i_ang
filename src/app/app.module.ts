import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { GameListModule } from './game-list/game-list.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameDetailsModule } from './game-details/game-details.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DemoModule,
    GameListModule,
    GameDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
