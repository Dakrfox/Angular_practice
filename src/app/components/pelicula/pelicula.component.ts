import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit, DoCheck, OnDestroy {
  //no logica
  public titulo:string;
  public mostrarPelicula:boolean;
  constructor( 
    private _route: ActivatedRoute,
    private _router:Router) {
    this.mostrarPelicula = true;
    this.titulo = "";
   
    console.log("constructor lanzado");
   }
  //logica funcionalidad
  ngOnInit(): void {
      this._route.params.subscribe((params:Params)=>{
      this.titulo =  params['titulo'];
    });
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
