import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent implements OnInit {

  title = 'mon site';

  imgUrl = 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670';

  img = {
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670',
    name: 'Cover image'
  };

  valeur: string;

  readonly Array = Array;

  constructor() { }

  ngOnInit(): void {
    // Valeur falsy => null, undefined, 0, '', false
  }

}
