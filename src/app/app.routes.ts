import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';

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
    path: "empresa",
    title: 'Empresa - Placdestak',
    component: CompanyComponent
  },
  {
    path: "**",
    title: 'Página não encontrada',
    component: NotFoundComponent
  }
];
