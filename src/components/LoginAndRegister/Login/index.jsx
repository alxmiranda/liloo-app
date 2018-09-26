import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Template from './../index';
import Button from './../../Buttons/';
import Input from './../../Inputs/';
import P from './../../Paragraph/';

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
    return (
      <Template title="Acesse sua conta" btnSupport={<Link className="btn btn-link" to="/cadastro">Cadastre-se</Link>}>
        <Button className="btn-login-fb">Facebook</Button>
        <P>
          <span>ou</span>
        </P>
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
          <Button onClick={() => this.props.sendLogin(this.state)}>Entrar</Button>
        </div>
      </Template>
    );
  }
}

export default Login;
