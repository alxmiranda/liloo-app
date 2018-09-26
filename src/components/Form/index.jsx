import React from 'react';

const Form = ({ action, children }) => (
  <Form action={action}>
    {children}
  </Form>
);

export default Form;
