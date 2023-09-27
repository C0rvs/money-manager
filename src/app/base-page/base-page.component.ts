import { Component, OnInit } from '@angular/core';
import { Expense } from '../Interfaces/Expenses';
import { DataService } from '../services/list_of_expenses.service';
import { ExpenseChartService } from '../services/expense-chart.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  expenseList: Expense[] = []; 
  test?: any; 
  expenseName: String = '';
  expenseAmount: number = 0; 
  total = 0; 

  constructor(private dataService: DataService, private userService: UserService, private expenseChartService: ExpenseChartService){

  }

  ngOnInit(){
    this.dataService.getExpensesViaApi().subscribe(expenses => {
      this.expenseList = expenses;
      this.total = this.dataService.computeTotal(this.expenseList)
    }); 
  }

  addItem(){
    let userId = this.userService.getUser(); 
    let expenseChartId = this.expenseChartService.getExpenseChartId();     
    let id = this.expenseList?.length; 
    const newExpense: Expense  = this.dataService.createExpense(id, this.expenseName, this.expenseAmount, userId, expenseChartId);   
    console.log(newExpense);  
    this.dataService.addItem(newExpense).subscribe(expense => {
      this.expenseList?.push(expense); 
      console.log("success");
      this.total = this.dataService.computeTotal(this.expenseList); 
    },
    error => {
      console.error("Error: " + error);
    });                                 
    this.expenseName = ''; 
    this.expenseAmount = 0; 
    
  }
  
}
