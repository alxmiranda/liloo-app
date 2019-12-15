import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Template from './../index';
import Button from './../../Buttons/';
import Input from './../../Inputs/';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
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

  sendFormData = (data) => {
    this.props.sendRegister(data);
  }

  render() {
    return (
      <Template title="Crie sua conta" btnSupport={
        <nav className="group-button">
          <Link className="btn btn-link" to="/entrar">Já esta registrado?</Link>
        </nav>
        }
      >
        <div>
          <Input
            type="text"
            placeholder="nome"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            placeholder="sobrenome"
            name="sobreNome"
            value={this.state.sobreNome}
            onChange={this.handleChange}
          />
          <Input
            type="email"
            placeholder="e-mail"
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
          <Button type="button" onClick={() => this.sendFormData(this.state)}>
            {this.props.loading ? 'aguarde...' : 'Cadastrar'}
          </Button>
        </div>
      </Template>
    );
  }
}

