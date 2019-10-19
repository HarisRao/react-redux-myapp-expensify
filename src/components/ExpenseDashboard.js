import React from 'react';
import ExpenseList from './ExpenseList';
import Input from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';
const ExpenseDashboardPage=()=>{
    return(
      <div>
        <ExpensesSummary></ExpensesSummary>
        <Input></Input>
        <ExpenseList></ExpenseList>
      </div>
    )
  }
  export default ExpenseDashboardPage;