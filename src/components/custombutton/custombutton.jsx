import React from 'react';
import './custombutton.scss';
const CustomButton = ({ children,isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google' :''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
  
  export default CustomButton;