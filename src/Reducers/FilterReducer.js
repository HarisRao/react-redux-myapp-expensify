import moment from 'moment';
const filterobj={
    text:'',
    sortby:'date',
    startdate:moment().startOf('month'),
    enddate:moment().endOf('month')
}
const filter=(state=filterobj,action)=>{
    switch(action.type){
    case 'change_text':
        return Object.assign({},state,action.text)
    case 'sortbyamount':
        return {...state,sortby:'amount'}
    case 'sortbydate':
        return {...state,sortby:'date'}
    case 'start_date':
        return {...state,startdate:action.startdate}
    case 'end_date':
        return {...state,enddate:action.enddate}
    default:
            return state
    }
}
export default filter;