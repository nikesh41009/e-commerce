import {combineReducers} from 'redux';
import userReducer from './user/userreducer.jsx';
import cartReducer from './cart/cart.reducer.js';
import {persistReducer}  from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './directory/dir.reducer';
import shopReducer from  './shop/shop.reducer';

const persistConfig = {
        key:'root',
        storage,
        whitelist:['cart']
} 

const rootReducer = combineReducers 
({
        user:userReducer,
        cart:cartReducer,
        menu:menuReducer,
        shop:shopReducer
});
export default persistReducer(persistConfig,rootReducer);