export interface Expense {
    id: number | undefined, 
    expense_chart_id: number | undefined, 
    user_id : number | undefined,
    expense_name: String,
    expense_amount: number
}; 