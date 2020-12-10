import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { GameApiService } from '../game-list/game-api.service';
import { Game } from '../game-list/models';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game$: Observable<Game>;

  /** Constructor. */
  constructor(
      private readonly route: ActivatedRoute,
      private readonly api: GameApiService) { }

  ngOnInit(): void {
    this.game$ = this.route
        .params
        // .pipe(flatMap(params => this.api.getOne(+params.id)))
        .pipe(flatMap(({id}) => this.api.getOne(+id)));
  }

  drawGenres(game: Game) {
    return game.genres.map(genre => genre.name).join(', ');
  }
}
