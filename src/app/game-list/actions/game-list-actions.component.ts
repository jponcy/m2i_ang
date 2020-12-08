import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { GameListActions } from '../models';

@Component({
  selector: 'app-game-list-actions',
  templateUrl: './game-list-actions.component.html',
  styleUrls: ['./game-list-actions.component.scss']
})
export class GameListActionsComponent implements OnInit {

  @Output()
  actionClick = new EventEmitter<GameListActions>(); // Renommage pour eviter un warning.
  // click = new EventEmitter<GameListActions>(); // Si on veut respecter la consigne a la lettre.

  constructor() { }

  ngOnInit(): void {
  }

  onFollow(event: MouseEvent) {
    event.stopPropagation();
    this.actionClick.emit(GameListActions.FOLLOW);
  }

  onShare(event: MouseEvent) {
    event.stopPropagation();
    this.actionClick.emit(GameListActions.SHARE);
  }

  onBuy(event: MouseEvent) {
    event.stopPropagation();
    this.actionClick.emit(GameListActions.BUY);
  }
}
