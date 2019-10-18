import {firebase,googleAuthProvider} from '../FireBase/firebase';
export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}
export const startLogOut=()=>{
    return()=>{
        return firebase.auth().signOut();
    }
}
export const login=(uid)=>({
    type:'Login',
    uid
})
export const logout=()=>({
    type :'Logout'
})