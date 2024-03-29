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
import LoadingPage from './components/LoadingPage';

let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(<Provider store={store}><Approuter/></Provider> , document.getElementById('root'))
    hasRendered=true
}
}

ReactDOM.render(<LoadingPage/>,document.getElementById('root'))

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
