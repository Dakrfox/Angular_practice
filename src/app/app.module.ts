import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyFC} from './components/MyFirstComponent/MFC.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFC,
    PeliculaComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
