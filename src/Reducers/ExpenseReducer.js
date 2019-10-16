const arr=[]
const expensereducer=(state=arr,action)=>{
    switch(action.type){
        case 'addexpense':
            //  return state.concat(action.expense)
            return [...state,action.expense]
        case 'remove_expense':
            return state.filter((item)=>{
                return item.id !== action.id
            })
        case 'edit_expense':
            return state.map((item)=>{
                if(item.id===action.id){
                    // return {...item,amount:action.amount}
                    return Object.assign({},item,action.update)
                }else{
                    return item
                }
            })
        case 'setExpense':
            return action.expense
        default:
            return state
    }
}
export default expensereducer;