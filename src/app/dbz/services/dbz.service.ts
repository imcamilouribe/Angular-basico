import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';


@Injectable()
export class Dbzservice{

    private _personajes: personaje[] = [
        {
          nombre: 'Goku',
          poder: 10000
        },
        {
          nombre: 'Vegeta',
          poder: 9999
        }
        ];

        get personajes(): personaje[]
        {
            return [...this._personajes];
        }

    constructor(){
        console.log('Servicio iniciado');
    }

    agregarpersonaje(data: personaje){

        this._personajes.push( data );
    }
}
