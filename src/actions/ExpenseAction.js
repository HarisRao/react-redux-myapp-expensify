import database from '../FireBase/firebase';



// export const addexpense=({description='',note='',amount=0,createat=0}={})=>({
    export const addexpense=(expense)=>({
    type:'addexpense',
    expense
    // expense:{
    //     id:uuid(),
    //     description,
    //     note,
    //     amount,
    //     createat
    // }
})
export const startAddExpense=(expense={})=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
        const {description='',note='',amount=0,createat=0}=expense;
        const expense1={description,note,amount,createat};
        database.ref(`users/${uid}/expenses`).push(expense1).then((ref)=>{
        dispatch(addexpense({
            id:ref.key,
            ...expense1
        }))
        })

    }}
export const removeexpense=({id}={})=>({
    type:'remove_expense',
    id
})

export const startRemoveExpense=({id}={})=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeexpense({id}))
        })
    }
}



export const editexpense=(id,update={})=>({
    type:'edit_expense',
    id,
    update
})

export const startEditExpense=(id,update)=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(update).then(()=>{
            dispatch(editexpense(id,update));
        })
    }
}



export const setExpense=(expense)=>({
    type:'setExpense',
    expense
}) 
export const startSetExpense=()=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapShot)=>{
        const expenses=[];
        snapShot.forEach((childSnapShot)=>{
            expenses.push({
                id:childSnapShot.key,
                ...childSnapShot.val()
            })
        })
        dispatch(setExpense(expenses))
    })
    }
}