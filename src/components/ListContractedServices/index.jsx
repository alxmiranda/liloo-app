import React from 'react';
import Input from '../Inputs';
import Button from '../Buttons';

class ListContractedServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome || '',
      service: this.props.service || '',
    };
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
        <div className="list-service-contracted">
          <div className="list-service-contracted__item">
            <figure>
              <img src="" alt="" />
            </figure>
            <article>
              <hgroup>
                <h2>Personal trainner</h2>
                <h3>Melisa Aguiar</h3>
              </hgroup>
              <p><span>Exelente</span> <span>55/56</span></p>
            </article>
            <div className="action">
              <Button>Mandar mensagem</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListContractedServices;
