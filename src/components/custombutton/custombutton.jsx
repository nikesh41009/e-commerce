import React from 'react';
import './custombutton.scss';
const CustomButton = ({ children,isGoogleSignIn,inverted, ...otherProps }) => (
    <button className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google' :''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
  
  export default CustomButton;