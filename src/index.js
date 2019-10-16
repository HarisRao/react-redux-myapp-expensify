import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Approuter from './App';
import * as serviceWorker from './serviceWorker';
import store from '../src/ConfigStore/Store';
import {startAddExpense,removeexpense,editexpense,startSetExpense} from '../src/actions/ExpenseAction';
import {searchtextfilter,sortbyamount,sortbydate,startdate,enddate} from '../src/actions/FilterAction';
import getVisibleExpense from '../src/Selectors/ExpenseVisible'; 
import {Provider} from 'react-redux';





const state=store.getState();









// store.subscribe(()=>{
//     const state=store.getState();
//     const visible=getvisible(state.expense,state.filter)
//     console.log(visible)
// })
// const expenseone=store.dispatch(addexpense({description:'haris',amount:5000,createat:1000}))
// const expensetwo=store.dispatch(addexpense({description:'Rao',amount:10000,createat:1200}))
// store.dispatch(removeexpense({id:expenseone.expense.id}))
// store.dispatch(editexpense(expensetwo.expense.id,{amount:50000}))

// store.dispatch(changetext({text:'is'}))
// store.dispatch(changetext({text:''}))
// store.dispatch(sortbyamount('amount'))
// store.dispatch(sortbydate())
// store.dispatch(startdate({startdate:0}))
// store.dispatch(startdate({startdate:undefined}))
// store.dispatch(enddate({enddate:999}))







ReactDOM.render(<p>Loading...</p>,document.getElementById('root'))
store.dispatch(startSetExpense()).then(()=>{
ReactDOM.render(<Provider store={store}><Approuter/></Provider> , document.getElementById('root'))})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
