import React, { Component } from 'react';
import { connect } from 'react-redux';
import TemplateDashboard from './../../components/TemplateDashboard';
import CardProfile from '../../components/CardProfile';
import ListContractedServices from '../../components/ListContractedServices';
import { getUserInfos, postUserInfos } from './actions';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfos: {},
    };
  }

  // componentDidMount = () => {
  //   this.props.getUserInfosDispatch();
  // }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      userInfos: {},
    });
  }

  updateUser = (data) => {
    this.props.postUserInfosDispatch(data);
  };

  render() {
    return (
      <TemplateDashboard title="Meu perfil">
        <div className="container">
          <header className="header-profile">
            <h3 className="title title--small">Meu perfil</h3>
          </header>
        </div>
        <CardProfile
          updateUser={this.updateUser}
          userInfos={this.state.userInfos}
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

export const mapStateToProps = ({ getUserInfosReducer }) => ({
  userInfos: getUserInfosReducer.userInfos,
});

export function mapDispatchToProps(dispatch) {
  return {
    getUserInfosDispatch: params => dispatch(getUserInfos(params)),
    postUserInfosDispatch: params => dispatch(postUserInfos(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
