import { Observable, of, Subject } from 'rxjs';
import { delay, map, repeat, tap } from 'rxjs/operators';

// class NumberGenerator {
//   private subject = new Subject<number>();
//   obs: Observable<number> = this.subject;

//   constructor() {
//     // setInterval(() => {
//     of(null)
//         .pipe(
//           delay(500),
//           repeat(),
//           map(() => Math.round(Math.random() * 10_000))
//         )
//         .subscribe(valeur => {
//           console.log('Envoi d\'une nouvelle valeur : ' + valeur);

//           this.subject.next(valeur);
//         });
//   }
// }

// export const numberGenerator = new NumberGenerator();

const subject = new Subject<number>();
export const numberGenerator: Observable<number> = subject;

of(null)
    .pipe(
      delay(1_500),
      repeat(),
      map(() => Math.round(Math.random() * 10_000)),
      // tap(value => console.log('Génération d\'une nouvelle valeur : ' + value))
    )
    .subscribe(nb => subject.next(nb));
