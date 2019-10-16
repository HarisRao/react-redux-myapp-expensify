import {NavLink} from 'react-router-dom';
import React from 'react';
const NotFoundPage=()=>{
    return(
      <div>
        <p>Error 404!</p>
        <NavLink to="/" activeClassName="active">Home Page</NavLink>
      </div>
    )
  }
  export default NotFoundPage;