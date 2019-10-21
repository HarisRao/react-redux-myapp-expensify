import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import '../styles/login.css'
const LoginPage=({startLogin})=>(
    <div className="box">
        <div className="center">
            <h1>Expensify App</h1>
            <p>It's time to get your expenses <br/> under control.</p>
            <button onClick={startLogin} className="button">Login With Google</button>
        </div>
    </div>
)
const mapStateToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})
export default connect(undefined,mapStateToProps)(LoginPage)