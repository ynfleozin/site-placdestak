import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [],
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
