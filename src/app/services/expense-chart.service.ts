import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseList } from '../Interfaces/ExpenseList';
import { Users } from '../Interfaces/Users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseChartService {
  private expense_chart_id: number = 1; 
  private apiUrl = 'http://localhost:5000/expense_chart'
  constructor(private http: HttpClient) { }


  getExistingExpenseChartsForUser(user: Users): Observable<ExpenseList[]>{
    let convertedUrl = this.apiUrl + `?user_id=${user.user_id}`;  
    return this.http.get<ExpenseList[]>(convertedUrl); 
  }

  getExpenseChartId(): number{
    return this.expense_chart_id; 
  }
}
