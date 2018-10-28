import React, { Component } from 'react';
import TemplateDashboard from './../../components/TemplateDashboard';
import CardProfile from '../../components/CardProfile';
import ListContractedServices from '../../components/ListContractedServices';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileType: 'custumer',
      profileInfo: this.props.profileInfo || '',
    };
  }

  sendFormData = (data) => {
    this.props.sendRegister(data);
  }

  render() {
    return (
      <TemplateDashboard title="Meu perfil">
        <div className="container">
          <header className="header-profile">
            <h3 className="title title--small">Meu perfil</h3>
          </header>
        </div>
        <CardProfile
          profileType={this.state.profileType}
          profileInfo={this.state.profileInfo}
        />
        <div className="container">
          <header className="header-profile">
            <h3 className="title title--small">Serviços contratados</h3>
          </header>
        </div>
        <ListContractedServices />
      </TemplateDashboard>
    );
  }
}

