import { Expense } from "./Expenses";

export interface ExpenseList {
    expenseChartName: string, 
    listOfExpenses: Expense[],
    id: number
};