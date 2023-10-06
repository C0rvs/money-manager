import { Component, Input } from '@angular/core';
import { ExpenseList } from '../Interfaces/ExpenseList';
import { Users } from '../Interfaces/Users';
import { ExpenseChartService } from '../services/expense-chart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  private user: Users = {
    user_id: 1, 
    user_name: 'cyrus', 
    user_password: 'encrypted'
  }
   
  expenseChartList : ExpenseList[] = [];

  constructor(private expenseChartService: ExpenseChartService, private userService: UserService){}


  ngOnInit(){
    if(this.user !== undefined) {
      //this.user = this.userService.getCurrentUser(); 
      if(this.user !== undefined) { 
        this.expenseChartService.getExistingExpenseChartsForUser(this.user).subscribe(retrievedList => this.expenseChartList = retrievedList); 
        console.log(this.expenseChartList)
      }
    }  
  }

}
