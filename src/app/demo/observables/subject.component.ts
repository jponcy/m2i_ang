import { Component, NgZone, OnInit } from '@angular/core';

import { numberGenerator } from './number-generator';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements OnInit {

  valeur: number;

  // valeur$ = numberGenerator;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    numberGenerator.subscribe(
      // Reception d'une donnee envoyee avec la methode "next".
      nb => {
        // console.log('Reception de la valeur ' + nb);
        this.ngZone.run(() => this.valeur = nb);
      },

      // Reception d'une erreur envoyee avec la methode "error".
      error => console.error(error),

      // Reception de la fin de l'observable ("complete").
      () => {});
  }
}

// const tab = [1, 5, 42];

// function sumTrad(values: number[]) {
//   // let acc = 0;

//   // for (const val of values) {
//   //   acc = acc + val;
//   // }

//   let result = null;

//   if (values.length > 0) {
//     let acc = values[0];

//     for (let i = 1; i < values.length; ++i) {
//       const val = values[i];

//       acc = acc + val;
//     }

//     result = acc;
//   }

//   return result;
// }


// function sumMod(values: number[]) {
//   return values.reduce((acc, val) => acc + val);
// }




// class Voiture {
//   nbRoues = 4;
//   nom: string;

//   constructor(nom: string) {
//     this.nom = nom;
//   }
// }

class Voiture {
  nbRoues = 4;

  // public/protected/private <nom>[: <type>] => attribut devient une propriete de la classe.
  constructor(public nom: string) {
  }
}


const v = new Voiture('choupette');

v.nom = 'Toto';
