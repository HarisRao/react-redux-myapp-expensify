import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../src/components/ExpenseDashboard';
import AddExpensePage from './components/AddExpense';
import EditExpensePage from '../src/components/EditExpense';
import HelpPage from '../src/components/Help';
import NotFoundPage from '../src/components/NotFound';
import LoginPage from './components/LoginPage';
import PrivateRoute from './Private/privateroute';
import Header from './components/Header';
import createHistory from 'history/createBrowserHistory';
export const history=createHistory();
const Approuter=()=>{
  return(
  <Router history={history}>
    <div>
      {/* <Header></Header> */}
      <Switch>
          <Route path="/" exact={true} component={LoginPage}></Route>
          <PrivateRoute path="/dashboard"  component={ExpenseDashboardPage}></PrivateRoute>
          <PrivateRoute path="/create"  component={AddExpensePage}></PrivateRoute>
          <PrivateRoute path="/edit/:id"  component={EditExpensePage}></PrivateRoute>
          <Route path="/help"  component={HelpPage}></Route>
          <Route  component={NotFoundPage}></Route>
       </Switch>
    </div>
  </Router>
  )
}
export default Approuter;
    