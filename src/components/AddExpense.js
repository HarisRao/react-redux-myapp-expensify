import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/ExpenseAction';
import '../styles/add.css'
const AddExpensePage=(props)=>{
    return(
      <div>
        <div className="add">
          <div className="inneradd">
          <h1 className="innertitle">Add Expense</h1>
          </div>
        </div>
        <div className="inneradd">
          <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(startAddExpense(expense))
            props.history.push('/')
          }}
        ></ExpenseForm>
        </div>
      </div>
    )
  }
  export default connect()(AddExpensePage);