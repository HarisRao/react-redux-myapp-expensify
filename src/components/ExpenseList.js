import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseVisible from '../Selectors/ExpenseVisible';
import '../styles/header.css';
import '../styles/expenselistvisible.css';
const ExpenseList=(props)=>{
    return (
        <div className="container1">
            <div className="headlist">
                <div className="mobile">Expenses</div>
                <div className="desktop">Expense</div>
                <div className="desktop">Amount</div>
            </div>
            {
                props.expense.length===0 ?
           ( <div className="item item-message"> 
               <span>No Expenses</span>
            </div>):(
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