import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
    <app-sub [nom]="prenom"></app-sub>
  `,
  styles: [
  ]
})
export class InputOutputComponent implements OnInit {

  private readonly tousLesPrenoms = ['Ben', 'Jean', 'Jacques', 'Bernard'];

  prenom: string;

  ngOnInit(): void {
    let counter = 0;
    setInterval(() => {
      this.prenom = this.tousLesPrenoms[counter % this.tousLesPrenoms.length];
      ++counter;
    }, 1_500);
  }
}
