import React from 'react';
import moment from 'moment';
// import store from '../ConfigStore/Store';
// import ConnectedExpenseList from './ExpenseList';
import {Link} from 'react-router-dom';
const ExpenseListItem=(props)=>{
    return(
        <div>
            <Link to={`/edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
            <p>{props.expense.amount}-{moment(props.expense.createat).format('MMMM Do, YYYY')}</p>
        </div>
    )
}

// const ConnectedExpense=connect()(ExpenseListItem)
export default ExpenseListItem