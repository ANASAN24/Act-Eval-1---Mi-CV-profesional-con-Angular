import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-angular';

  nombre = 'Ana Isabel Sánchez Fernández';

  estudios = 'Desarrollo de Aplicaciones Multiplataforma';

  frase = 'Apasionada por el desarrollo y las nuevas tecnologías.';

  ciudad = 'Málaga';

  telefono = 'xxx-xxx-xxx';

  email = 'email@gmail.com';

  github = 'github.com/usuario';

  idioma1 = 'Español';

  idioma2 = 'Inglés';

  sobreMi = 'Alumnna de 2ºDAM';

  fecha = new Date();
}
