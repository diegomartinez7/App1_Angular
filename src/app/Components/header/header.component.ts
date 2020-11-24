//Para integrar el decorador @Component es necesario realizar una importación
import { Component } from '@angular/core';

@Component({
    //Definir cómo podremos llamar al componente en angular
    selector: 'app-header',
    templateUrl: './header.component.html' 
})

//Clase del componente
//La clase debe ser exportada para poder agregarla al app.module.ts
export class HeaderComponent {
    titulo = "Mi App Angular"
}