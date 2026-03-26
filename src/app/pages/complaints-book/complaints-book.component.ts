import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-complaints-book',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './complaints-book.component.html',
  styleUrl: './complaints-book.component.scss',
})
export class ComplaintsBookComponent {}
