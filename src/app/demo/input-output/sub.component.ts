import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub',
  template: `
    <p>{{ msg }} {{ nom }}</p>
  `,
  styles: [
  ]
})
export class SubComponent {

  @Input() nom: string;

  msg = 'Salut';
}
