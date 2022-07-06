import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit, DoCheck, OnDestroy {
  //no logica
  public titulo:string;
  public mostrarPelicula:boolean;
  constructor() {
    this.mostrarPelicula = true;
    this.titulo = " pelicualas";
    console.log("constructor lanzado");
   }
  //logica funcionalidad
  ngOnInit(): void {
    console.log("evento onInit iniciado");
  }
  ngDoCheck(): void {
    console.log("evento DOcheck iniciado");
  }
  cambiarTitulo(){
    this.titulo = "el titulo ha sido cambiado";
  }
  ngOnDestroy(){
    console.log("evento OnDestroy sera eliminado");
  }
  ocultarPelicula(){
    this.mostrarPelicula = false;
  }
}
