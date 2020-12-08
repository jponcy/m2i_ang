import { Component } from '@angular/core';

import { Game, games } from './models';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent {
  readonly games: Game[] = games;

  description(game: Game) {
    let result: string;
    const words = game.description.split(/\s+/);

    if (words.length > 20) {
      result = words.slice(0, 21).join(' ') + '...';
    } else {
      result = game.description;
    }

    return result;
  }

  // Methode 1

  onFollow(game: Game) {
    window.alert(`User 'follow' ${game.title}`);
  }

  onShare(game: Game) {
    window.alert(`User 'share' ${game.title}`);
  }

  onBuy(game: Game) {
    window.alert(`User 'buy' ${game.title}`);
  }


  // Methode 2

  // onGameAction(game: Game, action: 'follow'|'share'|'buy') {
  //   window.alert(`User '${action}' ${game.title}`);
  // }
}
