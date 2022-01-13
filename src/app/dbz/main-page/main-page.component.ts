import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    nuevo: personaje = {
    nombre: 'Granola',
    poder: 5000000
  }

  constructor( ){}
}
