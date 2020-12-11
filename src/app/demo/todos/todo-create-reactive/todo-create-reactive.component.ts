import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create-reactive',
  templateUrl: './todo-create-reactive.component.html',
  styles: [
  ]
})
export class TodoCreateReactiveComponent {

  form = this.fb.group({
    name:     [null, [Validators.required, Validators.maxLength(5), Validators.pattern(/\w+\d+/)]],
    finished: { disabled: true, value: false } // TODO: to declare as readonly
  });

  constructor(private readonly fb: FormBuilder) {
    /*
    // Imaginons une donnee comme ceci.
    const utilisateur = {       // FormGroup
      lastname: 'dupond',       // FormControl
      firstname: 'toto',        // FormControl
      address: {                // FormGroup
        nb: 42,                 // FormControl
        streetType: 'street',   // FormControl
        streetName: 'voltaire', // FormControl
        city: 'paris'           // FormControl
      },
      phones: [                 // FormArray
        '0600000000',           // FormControl
        '0699999999',           // FormControl
      ]
    };

    // Le model a definir pour gerer cette donne avec un reactive form pourrait etre la suivante.
    const utilisateurForm = new FormGroup({
      lastname: new FormControl(''),
      firstname: new FormControl(''),
      address: new FormGroup({
        nb: new FormControl(),
        streetType: new FormControl('street'),
        streetName: new FormControl(),
        city: new FormControl()
      }),
      phones: new FormArray([])
    });

    // Cette methode utilisant les classes fonctionne, mais n'est pas la syntaxe conseillee.
    // Il est conseille d'utiliser le service form-builder.

    const utilisateurFormFb = fb.group({
      lastname: '',
      firstname: '',
      address: {
        nb: null,
        streetType: 'street',
        streetName: null,
        city: null
      },
      phones: [[]]
    });
    */
  }

  get name() {
    return this.form.controls.name;
  }

  // get value() { return this.form.value; }

  onSubmit(event: any) {
    event.preventDefault();

    // Process.
    console.log('Envoi du formulaire', this.form);
  }
}
