import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PortfolioCardComponent } from "../../components/portfolio-card/portfolio-card.component";
import { FEATURES, HEADLINE_TEXT, PORTFOLIO_IMGS, SERVICES } from '../../data/home-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, FooterComponent, PortfolioCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  headlineText = HEADLINE_TEXT;
  features = FEATURES;
  services = SERVICES;
  portfolioImgs = PORTFOLIO_IMGS;

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

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
