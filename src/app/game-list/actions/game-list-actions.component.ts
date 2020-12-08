import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-list-actions',
  templateUrl: './game-list-actions.component.html',
  styleUrls: ['./game-list-actions.component.scss']
})
export class GameListActionsComponent implements OnInit {

  @Output()
  follow = new EventEmitter<void>();

  @Output()
  share = new EventEmitter<void>();

  @Output()
  buy = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onFollow(event: MouseEvent) {
    event.stopPropagation();
    this.follow.emit();
  }

  onShare(event: MouseEvent) {
    event.stopPropagation();
    this.share.emit();
  }

  onBuy(event: MouseEvent) {
    event.stopPropagation();
    this.buy.emit();
  }
}
