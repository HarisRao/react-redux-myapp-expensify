import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../actions/ExpenseAction';
import {startRemoveExpense} from '../actions/ExpenseAction';
import '../styles/add.css'
const EditExpensePage=(props)=>{
    return(
      <div>
        <div className="add">
          <div className="inneradd">
            <h1 className="innertitle">Edit Expense</h1>
          </div>
        </div>
        <div className="inneradd">
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
          props.dispatch(startEditExpense(props.expense.id,expense))
          props.history.push('/')
        }}>
        </ExpenseForm>
        <button className="button2" onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}))
                props.history.push('/')
            }}>Remove Expense</button>
            </div>
      </div>
    )
  }
  const mapStateToProps=(state,props)=>({
    expense:state.expense.find((expense)=>{
      return expense.id===props.match.params.id
    })
  })
  export default connect(mapStateToProps)(EditExpensePage);