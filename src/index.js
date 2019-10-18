import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Approuter,{history} from './App';
import * as serviceWorker from './serviceWorker';
import store from '../src/ConfigStore/Store';
import {startSetExpense} from '../src/actions/ExpenseAction';
import {login,logout} from '../src/actions/auth';
import {Provider} from 'react-redux';
import {firebase} from './FireBase/firebase'; 













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


let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(<Provider store={store}><Approuter/></Provider> , document.getElementById('root'))
    hasRendered=true
}
}




ReactDOM.render(<p>Loading...</p>,document.getElementById('root'))
// store.dispatch(startSetExpense()).then(()=>{
// ReactDOM.render(<Provider store={store}><Approuter/></Provider> , document.getElementById('root'))})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=>{
        renderApp()
        if(history.location.pathname==='/'){
            history.push('/dashboard')
        }
        }
        )
    }
    else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
