import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "orcamentos",
    component: BudgetComponent
  },
  {
    path: "contacto",
    component: ContactComponent
  },
  {
    path: "**",
    title: 'Página não encontrada',
    component: NotFoundComponent
  }
];
