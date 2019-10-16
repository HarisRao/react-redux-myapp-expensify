import React from 'react';
import ExpenseList from './ExpenseList';
import Input from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';
const ExpenseDashboardPage=()=>{
    return(
      <div>
        {/* <p>This is from my Dash Board Component.</p> */}
        <ExpensesSummary></ExpensesSummary>
        <Input></Input>
        <ExpenseList></ExpenseList>
      </div>
    )
  }
  export default ExpenseDashboardPage;