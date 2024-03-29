import React from 'react';
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import '../styles/input.css';
import '../styles/expenseform.css';
import '../styles/login.css';
class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?props.expense.amount.toString():'',
            createat:props.expense?moment(props.expense.createat):moment(),
            focused:false,
            error:''
        }
    }
    descriptionchange(e){
        this.setState({
            description:e.target.value
        })
    }
    notechange(e){
        this.setState({
            note:e.target.value
        })
    }
    amountChange(e){
        if(!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState({
            amount:e.target.value
        })
    }
    }
    dateChange(e){
        this.setState({
            createat:e
        })
    }
    
     focus=({focused}) => {
     this.setState({
         focused
     })} 
     onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState({
                error:'please provide description and amount'
            })
        }else{
            this.setState({
                error:''
            })
          
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10),
                createat:this.state.createat.valueOf(),
                note:this.state.note
            })
        }
    }
     
    render(){
        return(
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form-error">{this.state.error}</p>}
                    <input type="text" className="text-input" placeholder='Description' autoFocus value={this.state.description} onChange={(e)=>this.descriptionchange(e)}/>
                    <input type="text" className="text-input" placeholder='Amount' value={this.state.amount} onChange={(e)=>{this.amountChange(e)}}/>
                    <SingleDatePicker date={this.state.createat} onDateChange={(e)=>{this.dateChange(e)}} focused={this.state.focused} onFocusChange={(e)=>{this.focus(e)}} numberOfMonths={1} isOutsideRange={()=>false}/>
                    <textarea className="textarea" placeholder='Add a note for your Expense (optional)' value={this.state.note} onChange={(e)=>{this.notechange(e)}}></textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
        )
    }
}
export default ExpenseForm;