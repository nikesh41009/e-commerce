import React from 'react';
import CartItem from '../cart-item/cart-item.js';
import {connect} from 'react-redux';
import CustomButton from '../custombutton/custombutton.jsx';
import {selectCartItems} from '../../redux/cart/cart.selector';
import './cart-dropdown.scss';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action.jsx';

const CartDropdown = ({ cartItems,history,dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >

    {
      cartItems.length ?
    cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      :
      <span className ="empty"> The cart is empty</span>
    }
      </div>
    <CustomButton onClick = 
    {() => 
      {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));