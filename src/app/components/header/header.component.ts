import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('menuToggle', { static: false }) menuToggle!: ElementRef;
  @ViewChild('mobileLinks', { static: false }) mobileLinks!: ElementRef;
  @ViewChild('menuOverlay', { static: false }) menuOverlay!: ElementRef;

  ngAfterViewInit() {
    if (this.menuToggle && this.mobileLinks && this.menuOverlay) {
      this.menuToggle.nativeElement.addEventListener('click', () => {
        this.mobileLinks.nativeElement.classList.toggle('open');
        this.menuOverlay.nativeElement.classList.toggle('show');
      });

      this.menuOverlay.nativeElement.addEventListener('click', () => {
        this.mobileLinks.nativeElement.classList.remove('open');
        this.menuOverlay.nativeElement.classList.remove('show');
      });
    }
  }
}
