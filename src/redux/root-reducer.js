import {combineReducers} from 'redux';
import userReducer from './user/userreducer.jsx';
import cartReducer from './cart/cart.reducer.js'

export default combineReducers 
({
        user:userReducer,
        cart:cartReducer




})