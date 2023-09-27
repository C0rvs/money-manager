import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseChartService {
  private expense_chart_id: number = 1; 
  private apiUrl = 'http://localhost:5000/expense_chart'
  constructor() { }

  getExpenseChartId(): number{
    return this.expense_chart_id; 
  }
}
