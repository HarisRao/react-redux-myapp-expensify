import React from 'react';
import {connect} from 'react-redux';
import {searchtextfilter} from '../actions/FilterAction'
import {sortbyamount,sortbydate,startdate,enddate} from '../actions/FilterAction';
import {DateRangePicker} from 'react-dates'
class Input extends React.Component{
    constructor(){
        super()
        this.state={
            focused:null 
        }
    }
    dateChange=({startDate,endDate}={})=>{
        this.props.dispatch(startdate(startDate))
        this.props.dispatch(enddate(endDate))
    }
    focusChange=(focused)=>{
        this.setState(()=>({
            focused
        }))
    }
    render(){
    return(
        <div>
            <input type="text" value={this.props.filter.text} onChange={(e)=>{
                this.props.dispatch(searchtextfilter({text:e.target.value}))
            }}></input>
            <select value={this.props.filter.sortby} onChange={(e)=>{
                if(e.target.value==='date'){
                    this.props.dispatch(sortbydate())
                }else if(e.target.value==='amount'){
                    this.props.dispatch(sortbyamount())
                }
            }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filter.startdate}
            endDate={this.props.filter.enddate}
            onDatesChange={this.dateChange}
            focusedInput={this.state.focused}
            onFocusChange={this.focusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            ></DateRangePicker>
        </div>
    )
        }
 
}
const mapStateToProps=(state)=>{
    return {
        filter:state.filter
    }
}
const ConnectedFilter=connect(mapStateToProps)(Input)
export default ConnectedFilter;