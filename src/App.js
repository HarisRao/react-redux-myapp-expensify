import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../src/components/ExpenseDashboard';
import AddExpensePage from './components/AddExpense';
import EditExpensePage from '../src/components/EditExpense';
import NotFoundPage from '../src/components/NotFound';
import LoginPage from './components/LoginPage';
import PrivateRoute from './Routes/privateroute';
import PublicRoute from './Routes/publicRoute';
import createHistory from 'history/createBrowserHistory';
export const history=createHistory();
const Approuter=()=>{
  return(
  <Router history={history}>
    <div>
      {/* <Header></Header> */}
      <Switch>
          <PublicRoute path="/" exact={true} component={LoginPage}></PublicRoute>
          <PrivateRoute path="/dashboard"  component={ExpenseDashboardPage}></PrivateRoute>
          <PrivateRoute path="/create"  component={AddExpensePage}></PrivateRoute>
          <PrivateRoute path="/edit/:id"  component={EditExpensePage}></PrivateRoute>
          <Route  component={NotFoundPage}></Route>
       </Switch>
    </div>
  </Router>
  )
}
export default Approuter;
    