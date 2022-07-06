import { Component } from "@angular/core";

@Component({
    selector: 'MFC',
    //templateUrl()
    template: ` 
        <h1>{{titulo}}</h1>
        <p>{{comentario}}</p>
        <p>{{year}}</p>
    `,
    //interpolacion de datos {{}}
})
export class MFC{
    //se puede tipar
    public titulo:string;
    public comentario: string;
    public year: number;


    constructor (){
        this.titulo = "hola mundo titulo";
        this.comentario = "si es un comentario"
        this.year = 2000
        console.log('yes sir')
        console.log(this.titulo, this.comentario, this.year);
    }
}