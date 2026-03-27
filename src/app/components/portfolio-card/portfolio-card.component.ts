import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
})
export class PortfolioCardComponent {
  @Input({ required: true }) item!: any;

  constructor(private dialog: MatDialog) {}

  openImages(): void {
    this.dialog.open(PortfolioModalComponent, {
      width: '900px',
      maxWidth: '95vw',
      panelClass: 'premium-modal',
      data: {
        title: this.item.title,
        images: this.item.projectImages,
      },
    });
  }
}
