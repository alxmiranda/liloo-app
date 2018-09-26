import React from 'react';

const P = ({children, ...rest}) => (
  <p
    {...rest}
  >
    {children}
  </p>
);

export default P;
