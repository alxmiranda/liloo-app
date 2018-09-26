import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import Footer from './../Footer';
import Button from './../Buttons/';
// import Face from './../../assets/social-media/facebook.svg';


class Template extends Component {
  componentWillMount = () => {
    console.log('ola');
  };

  render() {
    const {children, title, btnSupport} = this.props;
    return (
      <div className="background-pattern">
        <div className="box-register">
          <div className="box-register__content">
            <div className="box-register__brand" />
            <h1 className="title text--center">{title}</h1>
            {children}
            {/* <form action="">
              <Input type="text" placeholder="nome" />
              <Input type="text" placeholder="sobrenome" />
              <Input type="email" placeholder="e-mail" />
              <Input type="password" placeholder="senha" />
              <Input type="password" placeholder="confirmar senha" />
              <Button type="submit">Cadastrar</Button>
            </form> */}
          </div>
          {/* <Link className="btn btn-link" to="/login">Já esta registrado?</Link> */}
          {btnSupport}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Template;
