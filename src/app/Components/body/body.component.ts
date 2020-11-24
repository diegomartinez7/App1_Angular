//Importamos Component
import { Component } from '@angular/core';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

//Clase BodyComponent
export class BodyComponent {
    mensaje = 'Soy Body desde BodyComponent';
    visible = true;
    personajes: string[] = ['Reed','Susan','Johnny','Ben','Nathaniel'];
    frase: any = {
        autor:'Sr. Sarcasmo',
        texto: 'La gente habla sólo cuando tiene algo que decir'
    }
}