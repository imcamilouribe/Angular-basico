import { Component, Input, Output, EventEmitter } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private Dbzservice: Dbzservice) {}

  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();
  
  agregar()
  {
    if( this.nuevo.nombre.trim().length == 0 ){ return; }

    console.log(this.nuevo);
    this.Dbzservice.agregarpersonaje( this.nuevo );
    //this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
