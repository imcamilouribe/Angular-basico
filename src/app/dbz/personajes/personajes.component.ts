import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input('data') personajes: personaje[] = [];
  get personajes()
  {
    return this.Dbzservice.personajes;
  }

  constructor(private Dbzservice: Dbzservice){
  }
}
