import moment from 'moment';
const getvisible=(expense,{text,sortby,startdate,enddate}={})=>{
    return expense.filter((expense)=>{
        const createdMoment=moment(expense.createat)
        const startdatematch=startdate?startdate.isSameOrBefore(createdMoment,'day'):true
        const enddatematch=enddate?enddate.isSameOrAfter(createdMoment,'day'):true
        const textmatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startdatematch && enddatematch && textmatch
    }).sort((a,b)=>{
        if(sortby==='date'){
            return a.createat<b.createat?1:-1;
        }else if(sortby==='amount'){
            return a.amount<b.amount?1:-1;
        }
    })
}
export default getvisible; 