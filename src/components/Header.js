import {NavLink} from 'react-router-dom';
import '../App.css'
import React from 'react';
const Header=()=>{
    return(
      <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active" exact={true}>Dashboard</NavLink>      
        <NavLink to="/create" activeClassName="active">CreateExpense</NavLink>
        {/* <NavLink to="/edit" activeClassName="active">EditExpense</NavLink> */}
        <NavLink to="/help" activeClassName="active">Help</NavLink>
  
      </div>
    )
  }
  export default Header;