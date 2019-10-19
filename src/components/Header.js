import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';
import '../App.css'
import React from 'react';
const Header=({startLogOut})=>{
    return(
      <div>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>      
        <NavLink to="/create" activeClassName="active">CreateExpense</NavLink>
        <button onClick={startLogOut}>Logout</button>
  
      </div>
    )
  }

  const mapStateToProps=(dispatch)=>({
    startLogOut:()=>dispatch(startLogOut())

  })
  export default connect(undefined,mapStateToProps)(Header);