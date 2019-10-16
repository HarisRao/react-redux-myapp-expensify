import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/ExpenseAction';
const AddExpensePage=(props)=>{
    return(
      <div>
        {/* <p>This is from my Add Expense Component.</p> */}
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense)=>{
          props.dispatch(startAddExpense(expense))
          props.history.push('/')
        }}
        ></ExpenseForm>
      </div>
    )
  }
  export default connect()(AddExpensePage);