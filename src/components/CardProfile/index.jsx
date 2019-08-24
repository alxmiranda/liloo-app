import React from 'react';
import Input from '../Inputs';
import Button from '../Buttons';

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfos: {
        ddd: '',
        email: '',
        nome: '',
        perfil: '',
        situacao: '',
        telefone: '',
      },
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      userInfos: nextProps.userInfos,
    });
  };

  handleChange = (ev, masked) => {
    const value = masked ? ev : ev.target.value;
    const name = ev.target && ev.target.name;

    this.setState({
      userInfos: {
        ...this.state.userInfos,
        [name]: value,
      },
    });

    ev.preventDefault();
  }

  updateUser = data => this.props.updateUser(data);

  mask = (ev) => {
    const { value } = ev.target;

    const telefone = value.replace(/([\d]{2})([\d]{4})/, '$1 $2-');

    this.setState({
      ...this.state,
      userInfos: {
        ...this.state.userInfos,
        telefone,
      },
    });
  };

  render() {
    const { ddd, email, nome, perfil, situacao, telefone } = this.state.userInfos;
    return (
      <div className="container">
        <div className={`card-profile ${perfil && perfil}`}>
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
            <Input
              onChange={(ev) => {
                this.handleChange(ev);
              }}
              className="input-border"
              placeholder="nome"
              name="nome"
              value={nome}
            />
            <Input
              onChange={ev => this.handleChange(ev)}
              className="input-border"
              placeholder="email"
              name="email"
              value={email}
            />
            <Input
              onInput={(ev) => {
                this.mask(ev);
              }}
              className="input-border"
              placeholder="DDD + Telefone"
              name="telefone"
              value={telefone}
              maxlength="13"
            />
          </div>

        </div>
        <Button
          className="btn-save-profile"
          onClick={() => this.updateUser(this.state.userInfos)}
        >
          Salvar alterações
        </Button>
      </div>
    );
  }
}

export default CardProfile;
