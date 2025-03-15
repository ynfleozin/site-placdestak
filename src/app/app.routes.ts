import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: 'Placdestak',
    pathMatch: 'full'
  },
  {
    path: "orcamentos",
    title: 'Orçamentos - Placdestak',
    component: BudgetComponent
  },
  {
    path: "contacto",
    title: 'Contacto - Placdestak',
    component: ContactComponent
  },
  {
    path: "**",
    title: 'Página não encontrada',
    component: NotFoundComponent
  }
];
