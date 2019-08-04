import React from 'react';

const Strong = ({children, ...rest}) => (
  <strong
    {...rest}
  >
    {children}
  </strong>
);

export default Strong;
