import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-draw-value',
  template: `
    <p>
      Valeur : {{ value }}
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawValueComponent {

  @Input()
  value: number = null;
}
