import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import '../styles/expenselistvisible.css';
const ExpenseListItem=(props)=>{
    return(
        <Link className="item" to={`/edit/${props.expense.id}`}>
            <div>
            <h3 className="item-title">{props.expense.description}</h3>
            <span className="item-subtitle">{moment(props.expense.createat).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="item-data">Rs {props.expense.amount}</h3>
        </Link>
    )
}
export default ExpenseListItem