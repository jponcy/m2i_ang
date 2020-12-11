import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GameApiService } from './game-api.service';
import { Game, GameListActions, GameListFilter } from './models';

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
export class GameListComponent implements OnInit, OnDestroy {
  private games: Game[];

  filteredGames: Game[];

  /**
   * Style to apply on all game cards.
   *
   * @remarks
   * Width cannot be less than 400px
   */
  cardStyle: Style;

  private width: number;

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  constructor(private readonly api: GameApiService) {}

  ngOnInit(): void {
    this.api
        .getAll()
        .pipe(takeUntil(this.subscriptionHandler$))
        .subscribe(games => {
          this.games = games;
          this.filteredGames = games;
        });
  }

  ngOnDestroy() {
    this.subscriptionHandler$.next();
    this.subscriptionHandler$.complete();
  }

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
      if ((!filter.name || game.title.toLocaleLowerCase().includes(filter.name))
          && (!filter.genre || game.genres.find(g => g.id === filter.genre))
          && (!filter.editor || game.editor.name.toLocaleLowerCase().includes(filter.editor))) {
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

  drawGenres(game: Game) {
    return game.genres.map(genre => genre.name).join(', ');
  }

  onActionClick(action: GameListActions, game: Game) {
    switch (action) {
      case GameListActions.DELETE:
        this.api
            .delete(game)
            .pipe(takeUntil(this.subscriptionHandler$))
            .subscribe(() => {
              this.games.splice(this.games.indexOf(game), 1);
              this.filteredGames.splice(this.filteredGames.indexOf(game), 1);
            });
        break;
      default:
        window.alert(`User '${action}' ${game.title}`);
        break;
    }
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
