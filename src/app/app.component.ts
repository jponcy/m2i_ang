import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  ],
})
export class AppComponent {

  page: string;

  route(routeName: string) {
    this.page = routeName;
  }
}
