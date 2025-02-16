import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  features = [
    {
      icon: 'assets/icons/star.svg',
      title: 'Qualidade Garantida',
      text: 'Serviços de alta qualidade, inovadores e adaptados às necessidades de cada projeto.'
    },
    {
      icon: 'assets/icons/teamwork.svg',
      title: 'Equipe Especializada',
      text: 'Comprometida em entregar resultados excepcionais através de técnicas avançadas de construção.'
    },
    {
      icon: 'assets/icons/budget.svg',
      title: 'Obtenha um Orçamento',
      text: 'Fale connosco e veja as melhores condições para o seu projeto.'
    }
  ];
}
