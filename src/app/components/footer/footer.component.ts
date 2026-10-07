import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  textoFooter = 'Currículum desarrollado con Angular';

  nombre = 'Andua valero tiradea';

  fecha = new Date();

}