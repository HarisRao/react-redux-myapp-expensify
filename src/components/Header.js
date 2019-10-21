import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';
import '../App.css';
import '../styles/header.css';
import React from 'react';
const Header=({startLogOut})=>{
    return(
      <header className="header">
        <div className="container">
          <div className="innercontainer">
              <Link to="/dashboard" className="title"> <h1 className="head">Expensify</h1></Link>      
              {/* <NavLink to="/create" activeClassName="active">CreateExpense</NavLink> */}
              <button onClick={startLogOut} className="button logout">Logout</button>
          </div>
        </div>
      </header>
    )
  }

  const mapStateToProps=(dispatch)=>({
    startLogOut:()=>dispatch(startLogOut())

  })
  export default connect(undefined,mapStateToProps)(Header);