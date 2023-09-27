import { Injectable } from '@angular/core';
import { Expense } from '../Interfaces/Expenses';
import {  Observable, map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserService } from './user.service';
import { ExpenseChartService } from './expense-chart.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/list_of_expenses'
  constructor(private client: HttpClient, private userService: UserService, private expenseChartService: ExpenseChartService) { }

  computeTotal(expenseList : Expense [] | undefined): number{
    let total = 0; 
    console.log(expenseList);
    if(expenseList !== undefined && expenseList.length > 0){
      for(let i = 0; i < expenseList.length; i++){
        console.log(i)
        total+= expenseList[i].expense_amount;
      }
    }
    return total; 
  }

  createExpense(id: number | undefined, expenseName: String, expenseAmount: number, userId: number, expenseChartId: number): Expense {
    let newId = id === undefined ? 10 : id +1; 
      const newExpense = {
        id: newId,
        expense_chart_id : expenseChartId, 
        user_id : userId, 
        expense_name: expenseName, 
        expense_amount: expenseAmount
      }
      return newExpense; 

   
  }

  addItem(expense: Expense | null): Observable<any>{
    return this.client.post<Expense>(this.apiUrl , expense, httpOptions); 
  }

  getExpensesViaApi(): Observable<any[]>{
    let user_id = this.userService.getUser(); 
    let new_api_url = this.apiUrl + '?user_id=' + user_id; 
    return this.client.get<any[]>(new_api_url);
  }
}
