import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
const LoginPage=({startLogin})=>(
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
)
const mapStateToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})
export default connect(undefined,mapStateToProps)(LoginPage)