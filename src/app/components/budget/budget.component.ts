import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  budgetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.budgetForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      message: [''],
    })
  }


  setValue(){
    this.budgetForm.setValue({})
  }
}
