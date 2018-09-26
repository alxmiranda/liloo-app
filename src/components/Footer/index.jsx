import React from 'react';
import LogoLiloo from './../../assets/Liloo.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="container">
        <div className="footer__col footer__brand">
          <img src={LogoLiloo} alt="Logotipo da liloo" className="brand" />
        </div>
        <div className="footer__col footer__contacts">
          <div>
            <div className="box-icon">
              <img src="" alt="" />
            </div>
            <span>(11) 3791-7315</span>
          </div>
          <div>
            <div className="box-icon">
              <img src="" alt="" />
            </div>
            <span>contato@liloo.com.br</span>
          </div>
        </div>
        <div className="footer__col footer__social-media">
          <div className="box-icon">
            <img src="" alt="" />
          </div>
          <div className="box-icon">
            <img src="" alt="" />
          </div>
          <div className="box-icon">
            <img src="" alt="" />
          </div>
          <div className="box-icon">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer__infos">
      <div className="container">
        <a href="#">Termos de uso</a>
        {/* <Link to="/">Termos de uso</Link> */}
        <small>©2016, Liloo Serviços de Internet. CNPJ 14.127.813/0001-51</small>
      </div>
    </div>
  </footer>
);

export default Footer;
