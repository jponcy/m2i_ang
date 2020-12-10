import { Component, EventEmitter, Output } from '@angular/core';

import { GameListActions } from '../models';

@Component({
  selector: 'app-game-list-actions',
  templateUrl: './game-list-actions.component.html',
  styleUrls: ['./game-list-actions.component.scss']
})
export class GameListActionsComponent {

  @Output()
  actionClick = new EventEmitter<GameListActions>(); // Renommage pour eviter un warning.

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

  onDelete(event: MouseEvent) {
    event.stopPropagation();

    if (window.confirm('Are your sure?')) {
      this.actionClick.emit(GameListActions.DELETE);
    }
  }
}
