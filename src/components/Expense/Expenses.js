import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import'./ExpenseItem.css'
import { ExpensesChart } from "./ExpensesChart"
import { ExpensesList } from "./ExpensesList"
import ExpensesFilter from "../NewExpense/ExpenseFilter"
// import { expenses } from "../App"
import { Card } from "../UI/Card"
export const ExpenseItems = (props) =>{
      const [filterdYear , setFilterdYear]= useState('2021');
      const handleYearChange =(changed)=>
      {
          setFilterdYear(changed);
      }
      const filteredExpenses = props.expenses.filter(expense =>{
            return expense.date.getFullYear().toString()===filterdYear;
      })
     
return(
      <li>           
      <Card className='expenses'>
      <ExpensesFilter selected={filterdYear} onyearFilter={handleYearChange} />
      <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList 
     filteredExpenses={filteredExpenses}
     />
      </Card>
      </li>
      )
}