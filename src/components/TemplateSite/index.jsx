import React from 'react';
import Footer from './../Footer';
import Header from './../Header';

const TemplateSite = ({ children, title = 'Pagina x' }) => (
  <div className="background-no-pattern">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default TemplateSite;
