import {createStore,combineReducers,applyMiddleware} from 'redux';
import expensereducer from '../Reducers/ExpenseReducer';
import filterreducer from '../Reducers/FilterReducer';
import authReducer from '../Reducers/AuthReducer';
import thunk from 'redux-thunk';
const store=createStore(
    combineReducers({
    expense:expensereducer,
    filter:filterreducer,
    auth:authReducer
}),applyMiddleware(thunk)
);
export default store;