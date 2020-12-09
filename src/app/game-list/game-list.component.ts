import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

import { Game, GameListActions, GameListFilter, games } from './models';

// On pourrait aussi utiliser un type complexe definissant qu'on a une clef en chaine de caractere {[key: string]: any}
interface Style {
  width: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent {
  private readonly games: Game[] = games;

  filteredGames: Game[] = this.games;

  subject = new Subject<number>();

  /**
   * Style to apply on all game cards.
   *
   * @remarks
   * Width cannot be less than 400px
   */
  cardStyle: Style;

  private width: number;

  constructor() {}

  /**
   * Resets the card with when user clicks on reset button or when user resizes the screen.
   */
  @HostListener('window:resize')
  onResetSize() {
    if (this.width) {
      this.width = null;
      this.cardStyle.width = null;
    }
  }

  onDownSize() {
    this.updateStyle(-10);
  }

  onUpSize() {
    this.updateStyle(+10);
  }

  onGameFilter(filter: GameListFilter) {
    const filterResults = [];

    for (const game of this.games) {
      if (game.title.toLocaleLowerCase().includes(filter.name)
          && (!filter.genre || game.genre.id === filter.genre)
          && game.editor.toLocaleLowerCase().includes(filter.editor)) {
        filterResults.push(game);
      }
    }

    this.filteredGames = filterResults;
  }

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

  onActionClick(action: GameListActions, game: Game) {
    window.alert(`User '${action}' ${game.title}`);
  }

  /**
   * Updates the style to apply on each -game- card.
   * @param widthInc The width (in px) to add.
   */
  private updateStyle(widthInc: number) {
    if (!this.width) {
      const firstCard: HTMLElement = document.querySelector('app-game-list .card');
      this.width = firstCard.offsetWidth;
    }

    this.width += widthInc;

    this.cardStyle = { width: `${this.width}px` };
  }
}
