import React from 'react';
import {connect} from 'react-redux';
import Total from './ExpensesTotal.js'
import ExpenseVisible from '../Selectors/ExpenseVisible'
function ExpensesSummary(props){
    return(
        <div>
            <h2>Viewing {props.ExpenseCount} expenses totalling Rs{props.TotalExpense}.</h2> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    const expense=ExpenseVisible(state.expense,state.filter)
    return{
        ExpenseCount:expense.length,
        TotalExpense:Total(expense)
    }
}


export default connect(mapStateToProps)(ExpensesSummary);