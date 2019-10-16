import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editexpense} from '../actions/ExpenseAction';
import {startRemoveExpense} from '../actions/ExpenseAction'
const EditExpensePage=(props)=>{
    return(
      <div>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
          props.dispatch(editexpense(props.expense.id,expense))
          props.history.push('/')
        }}>
        </ExpenseForm>
        <button onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
      </div>
    )
  }
  const mapStateToProps=(state,props)=>({
    expense:state.expense.find((expense)=>{
      return expense.id===props.match.params.id
    })
  })
  export default connect(mapStateToProps)(EditExpensePage);