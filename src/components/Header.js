import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../actions/auth';
import '../App.css'
import React from 'react';
const Header=({logOut})=>{
    return(
      <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active" exact={true}>Dashboard</NavLink>      
        <NavLink to="/create" activeClassName="active">CreateExpense</NavLink>
        {/* <NavLink to="/edit" activeClassName="active">EditExpense</NavLink> */}
        <NavLink to="/help" activeClassName="active">Help</NavLink>
        <button onClick={logOut}>Logout</button>
  
      </div>
    )
  }

  const mapStateToProps=(dispatch)=>({
    logOut:()=>dispatch(logOut())

  })
  export default connect(undefined,mapStateToProps)(Header);