import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  headlineText = [
    {
      title: 'SUSTENTABILIDADE',
      subtitle: 'Construção em Aço Leve - (Light Steel Framing)',
      imgDesktop: 'assets/imgs/bannerPlacdestak.webp',
      imgMobile: 'assets/imgs/bannerMobile.jpg',
    },
    {
      title: 'CONFORTO TERMOACÚSTICO',
      subtitle: 'Gesso Cartonado',
      imgDesktop: 'assets/imgs/bannerPlacdestak.webp',
      imgMobile: 'assets/imgs/bannerMobile.jpg',
    },
  ];

  features = [
    {
      icon: 'assets/icons/star.svg',
      title: 'Qualidade Garantida',
      text: 'Serviços de alta qualidade, inovadores e adaptados às necessidades de cada projeto.',
    },
    {
      icon: 'assets/icons/teamwork.svg',
      title: 'Equipe Especializada',
      text: 'Comprometida em entregar resultados excepcionais através de técnicas avançadas de construção.',
    },
    {
      icon: 'assets/icons/budget.svg',
      title: 'Obtenha um Orçamento',
      text: 'Fale connosco e veja as melhores condições para o seu projeto.',
    },
  ];

  services = [
    {
      title: 'Construção LSF',
      description:
        'O LSF (Light Steel Framing) é um sistema construtivo amplamente utilizado devido às suas vantagens, como resistência estrutural, durabilidade, sustentabilidade e flexibilidade de projeto.',
      img: 'assets/imgs/serviceTest.jpg',
      advantages: [
        'Conforto térmico e acústico',
        'Construção mais segura',
        'Tempo de construção reduzido',
        'Sustentabilidade',
        'Reduzida mão de obra e recursos',
        'Ampliações simples',
        'Soluções criativas e flexíveis',
        'Controle de qualidade assegurado',
      ],
    },
    {
      title: 'Gesso Cartonado',
      description:
        'Conhecido também como Pladur (gesso cartonado ou gesso laminado), são excelentes opções técnicas e decorativas para paredes, tetos, lareiras, salas acústicas ou revestimentos (interiores ou exteriores) em material versátil, com óptimas características acústicas, térmicas e decorativas.',
      img: 'assets/imgs/serviceTest.jpg',
      advantages: [
        'Alto desempenho térmico, acústico e conforto no ambiente',
        'Resistentes ao fogo, humidade e impacto',
        'Segurança e durabilidade em diferentes ambientes',
        'Podem receber diversos tipos de revestimentos, como pintura e aplicação de azulejos',
        'Flexibilidade estética e possibilitando a integração com o estilo desejado',
      ],
    },
    {
      title: 'Tetos Amovível e Metálicos',
      description:
        'Os tetos amovíveis e metálicos são sistemas técnicos que permitem acesso fácil às instalações acima do teto, facilitando a manutenção e o reparo. Além disso, oferecem bom desempenho térmico e acústico, regulando a temperatura e reduzindo o ruído entre ambientes. Sua estética moderna, com opções de cores e texturas, permite personalização do ambiente de acordo com as preferências estéticas e funcionais.',
      img: 'assets/imgs/serviceTest.jpg',
    },
  ];

  portfolioImgs = [
    {
      img: 'assets/imgs/serviceTest.jpg',
      alt: 'Casa da Música',
    },
    {
      img: 'assets/imgs/serviceTest.jpg',
      alt: 'Moradia T5',
    },
    {
      img: 'assets/imgs/serviceTest.jpg',
      alt: 'Apartamento',
    },
    {
      img: 'assets/imgs/serviceTest.jpg',
      alt: 'Currascaria Kasarão',
    },
  ];

  isMobile = false;
  headlineIndex = 0;
  private intervalId!: ReturnType<typeof setInterval>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;

      this.intervalId = setInterval(() => {
        this.headlineIndex =
          (this.headlineIndex + 1) % this.headlineText.length;
      }, 10000);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
