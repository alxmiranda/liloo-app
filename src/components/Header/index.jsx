import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import Nav from './../Nav';
import LogoLiloo from './../../assets/Liloo.png';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }

  toggleMenu() {
    console.log('here', this);
    if (!this.state.openMenu) {
      this.setState({
        openMenu: true,
      });
    } else {
      this.setState({
        openMenu: false,
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <button onClick={() => this.toggleMenu()} className={`btn--icon ${this.state.openMenu ? 'btn--close' : ''}`}>
            {!this.state.openMenu ? <FaBars /> : <FaTimes />}
          </button>
          <div className="header__brand">
            <img src={LogoLiloo} alt="Logotipo da liloo" className="brand" />
          </div>
          <nav className="header__dynamic">
            <div className="btn-group">
              <Link className="btn" to="entrar">Entrar</Link>
              <Link className="btn btn--link" to="cadastrar" onClick={e => e.preventDefault()}type="button">Cadastrar</Link>
            </div>
          </nav>
          <div className="header__search">
            <input type="text" placeholder="Buscar" />
            <button className="btn--icon">
              <FaSearch />
            </button>
          </div>
        </div>
        <Nav
          open={this.state.openMenu}
          toggleMenu={this.toggleMenu}
        />
      </header>
    );
  }
}

export default Header;

