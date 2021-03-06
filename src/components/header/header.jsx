import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'; 
import { ReactComponent as Logo } from '../../crown.svg';
import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import './header.scss';
import {auth} from '../../firebase/firebase.jsx';

const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
          { 
                currentUser ? (
                <div className="option" onClick = { () => auth.signOut()}>SIGN OUT</div>
                )
                : (
                <Link className="option" to = '/sign'>SIGN IN</Link>
                )}
                <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);