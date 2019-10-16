import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../src/components/ExpenseDashboard';
import AddExpensePage from './components/AddExpense';
import EditExpensePage from '../src/components/EditExpense';
import HelpPage from '../src/components/Help';
import NotFoundPage from '../src/components/NotFound';
import Header from '../src/components/Header';
import './FireBase/firebase'
const Approuter=()=>{
  return(
  <Router>
    <div>
    <Header></Header>
      <Switch>
          <Route path="/" exact={true} component={ExpenseDashboardPage}></Route>
          <Route path="/create"  component={AddExpensePage}></Route>
          <Route path="/edit/:id"  component={EditExpensePage}></Route>
          <Route path="/help"  component={HelpPage}></Route>
          <Route  component={NotFoundPage}></Route>
       </Switch>
    </div>
  </Router>
  )
}
export default Approuter;
    