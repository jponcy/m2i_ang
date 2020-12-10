import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  id: number = null;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;

    if (id) {
      this.id = id;
    }
  }
}
