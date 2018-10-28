import React from 'react';
import Footer from './../Footer';
import Header from './../Header';

const TemplateDashboard = ({ children, title = 'Pagina x' }) => (
  <div className="template-dashboard background-no-pattern">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default TemplateDashboard;
