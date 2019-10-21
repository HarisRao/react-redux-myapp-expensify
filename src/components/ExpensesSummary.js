import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Total from './ExpensesTotal.js'
import ExpenseVisible from '../Selectors/ExpenseVisible';
import '../styles/summary.css';
function ExpensesSummary(props){
    return(
        <div className="maindiv">
            <div className="innerdiv">
                <h1 className="view">Viewing <span>{props.ExpenseCount}</span> expenses totalling Rs <span>{props.TotalExpense}</span>.</h1> 
            <div className="linkdiv">
                <Link to="/create" className="button">Add Expense</Link>
            </div>
            
            </div>           
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