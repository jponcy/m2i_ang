import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { GameDetailsModule } from './game-details/game-details.module';
import { GameListModule } from './game-list/game-list.module';
import { NotFoundModule } from './not-found/not-found.module';
import { GameFormModule } from './game-form/game-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DemoModule,
    GameListModule,
    GameDetailsModule,
    NotFoundModule,
    GameFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
