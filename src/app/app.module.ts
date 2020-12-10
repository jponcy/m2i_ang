import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { GameListModule } from './game-list/game-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DemoModule,
    GameListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
