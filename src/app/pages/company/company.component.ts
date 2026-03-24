import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
