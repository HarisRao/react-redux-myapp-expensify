import React from 'react';
const Info=(props)=>{
    return(
        <div>
            <h1>Info</h1>
            <p>This is my Info : {props.info}</p>
        </div>
    )
}
const Authenticationwarning=(Wrappedcomponent)=>{
    return(props)=>(
        <div>
            {props.isauthenticated?<p><Wrappedcomponent {...props}></Wrappedcomponent></p>:<p>please login to view the info</p>}
            
        </div>
    )
}
const authentcation=Authenticationwarning(Info)
export default authentcation;