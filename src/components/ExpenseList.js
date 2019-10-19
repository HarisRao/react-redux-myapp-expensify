import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseVisible from '../Selectors/ExpenseVisible';
const ExpenseList=(props)=>{
    return (
        <div>
            {
                props.expense.length===0 ?
           ( <h3>No Expenses</h3>):(
            props.expense.map((expense)=>{
                return (
                    <ExpenseListItem expense={expense} key={expense.id}></ExpenseListItem>
                )
            })
        )}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        expense:ExpenseVisible(state.expense,state.filter)
    }
}

const ConnectedExpenseList=connect(mapStateToProps)(ExpenseList)
export default ConnectedExpenseList;