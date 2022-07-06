import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import {MyFC} from './components/MyFirstComponent/MFC.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFC,
    PeliculaComponent,
    PruebasComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
