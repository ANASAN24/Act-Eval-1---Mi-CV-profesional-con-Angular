import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  sobreMi = 'Alumnna de 2ºDAM';

  tecnologias = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'Git',
    'GitHub',
    'C Sharp'
  ];

}