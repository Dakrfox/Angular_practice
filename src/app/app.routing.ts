//importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { from, fromEventPattern } from "rxjs";
import {Routes, RouterModule, Router} from '@angular/router';

//importar componentes a los cuales les quiero hacer una pagian exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { ErrorComponent } from "./components/error/error.component";

//array de rutas
const appRoutes: Routes =[
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'blog', component:BlogComponent},
    {path: 'form', component:FormularioComponent},
    {path: 'peliculas', component:PeliculaComponent},
    {path: '**', component:ErrorComponent},
];

//exportar el modulo de rutas
//esta manera esta obsoleta
/*export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);*/


//cambio del deprected
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);