import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Template from './../index';
import Button from './../../Buttons/';
import Input from './../../Inputs/';
import P from './../../Paragraph/';
import Strong from './../../Strong';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
    ev.preventDefault();
  }

  sendLogin = (data) => {
    this.props.sendLogin(data);
  }

  render() {
    const { error } = this.props;
    return (
      <Template title="Acesse sua conta" btnSupport={
        <nav className="group-button">
          <Link className="btn" to="/cadastro/profissional">Cadastro profissional</Link>
          <Link className="btn btn--link" to="/cadastro/cliente">Cadastro cliente</Link>
        </nav>
      }>
        {/* <Button className="btn-login-fb">Facebook</Button>
        <P>
          <span>ou</span>
        </P> */}
        <div>
          <Input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            placeholder="senha"
            name="senha"
            value={this.state.senha}
            onChange={this.handleChange}
          />
          <Button disalbed={this.props.loading} onClick={() => this.props.sendLogin(this.state)}>
            {this.props.loading ? 'aguarde...' : 'Entrar'}
          </Button>
          <div className={`feedback ${error && 'show'}`}>
            <Strong className={error ? 'feedback__error' : 'feedback__success'}>{error}</Strong>
          </div>
        </div>
      </Template>
    );
  }
}

export default Login;
