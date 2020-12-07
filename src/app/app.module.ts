import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
