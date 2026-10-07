import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = 'cv-angular';

  nombre = 'Ana Isabel Sánchez Fernández';

  estudios = 'Desarrollo de Aplicaciones Multiplataforma';

  frase = 'Apasionada por el desarrollo y las nuevas tecnologías.';

}