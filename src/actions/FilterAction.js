export const searchtextfilter=(text={})=>({
    type:'change_text',
    text
})


export const sortbydate=()=>({
    type:'sortbydate'
})


export const sortbyamount=()=>({
    type:'sortbyamount',
})


export const startdate=(startdate={})=>({
    type:'start_date',
    startdate
})


export const enddate=(enddate={})=>({
    type:'end_date',
    enddate
})