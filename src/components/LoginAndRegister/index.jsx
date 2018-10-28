import React from 'react';
import Footer from './../Footer';

const Template = ({ children, title, btnSupport }) => (
  <div className="background-pattern">
    <div className="box-register">
      <div className="box-register__content">
        <div className="box-register__brand" />
        <h1 className="title text--center">{title}</h1>
        {children}
      </div>
      {btnSupport}
    </div>
    <Footer />
  </div>
);

export default Template;
