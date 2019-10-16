import {createStore,combineReducers,applyMiddleware} from 'redux';
import expensereducer from '../Reducers/ExpenseReducer';
import filterreducer from '../Reducers/FilterReducer';
import thunk from 'redux-thunk';
const store=createStore(
    combineReducers({
    expense:expensereducer,
    filter:filterreducer
}),applyMiddleware(thunk)
);
export default store;