//Importamos Component
import { Component } from '@angular/core';

@Component ({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

//Clase FooterComponent
export class FooterComponent{
    nombre = 'Christopher Diego Martínez Bernal';
    //anioActual = new Date().getFullYear();
    anio: number;
    autor: string;

    constructor(){
        this.anio = new Date().getFullYear();
        this.autor = 'Diego Daymon';
    }
}