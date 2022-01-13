import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { dbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './dbz/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    dbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
