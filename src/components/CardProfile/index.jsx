import React from 'react';
import Input from '../Inputs';
import Button from '../Buttons';

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome || '',
      email: this.props.email || '',
      telefone: this.props.telefone || '',
      senha: this.props.senha || '',
      confirmSenha: '',
    }
  }
  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
    ev.preventDefault();
  }

  render() {
    const { profileType, profileInfo } = this.props;
    return (
      <div className="container">
        <div className={`card-profile ${profileType}`}>
          <div className="card-profile__col">
            <div className="card-profile__photo">
              <figure>
                <img src="" alt="" />
                <figcaption>
                  <span>Tamanho maximo: 5MB</span>
                  <span>Formato JPG / PNG / GIF</span>
                </figcaption>
              </figure>
              <Button className="btn--secondary">Alterar foto</Button>
            </div>
          </div>

          <div className="card-profile__col">
            <Input className="input-border" placeholder="nome" value={this.state.nome} />
            <Input className="input-border" placeholder="email" value={this.state.email} />
            <Input className="input-border" placeholder="telefone" value={this.state.telefone} />
          </div>

          <div className="card-profile__col">
            <Input className="input-border" placeholder="senha" value={this.state.senha} />
            <Input className="input-border" placeholder="confirmar senha" value={this.state.confirmaSenha} />
          </div>
        </div>
        <Button className="btn-save-profile">Salvar alterações</Button>
      </div>
    );
  }
}

export default CardProfile;
