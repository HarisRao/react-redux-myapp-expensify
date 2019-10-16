import uuid from 'uuid';
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
    return(dispatch)=>{
        const {description='',note='',amount=0,createat=0}=expense;
        const expense1={description,note,amount,createat};
        database.ref('expenses').push(expense1).then((ref)=>{
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
export const editexpense=(id,update={})=>({
    type:'edit_expense',
    id,
    update
})