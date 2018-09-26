import React from 'react';

const Button = ({ type, className, children, ...rest }) => (
  <button
    type={type}
    className={`btn ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
