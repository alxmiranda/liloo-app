import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import Nav from './../Nav';
import { sendLogout } from '../../containers/Login/actions';
import { logout } from '../../services/auth';
import LogoLiloo from './../../assets/Liloo.png';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openMenu: false,
//     };
//   }

//   toggleMenu() {
//     if (!this.state.openMenu) {
//       this.setState({
//         openMenu: true,
//       });
//     } else {
//       this.setState({
//         openMenu: false,
//       });
//     }
//   }

  const headerLogged = () => (
    <div className="btn-group">
      <button className="btn" to="entrar">Publicar anuncio</button>
    </div>
  );

  const headerUnLogged = () => (
    <div className="btn-group">
      <Link className="btn" to="entrar">entrar</Link>
      <button className="btn btn--link" to="cadastrar" onClick={e => window.scrollTo(0, 3000)}type="button">Cadastrar</button>
    </div>
  );

//   logout = () => {
//     const dispatch = useDispatch();
//     dispatch(sendLogout());
//     window.location.href = '#/entrar';
//   }
//   render() {
//     return (
//       <header className="header">
//         <button onClick={() => this.logout()}>Troca</button>
//         <div className="header__container">
//           <button onClick={() => this.toggleMenu()} className={`btn--icon ${this.state.openMenu ? 'btn--close' : ''}`}>
//             {!this.state.openMenu ? <FaBars /> : <FaTimes />}
//           </button>
//           <div className="header__brand">
//             <img src={LogoLiloo} alt="Logotipo da liloo" className="brand" />
//           </div>
//           <nav className="header__dynamic">
//             {
//               // value.logged ? this.headerLogged() : this.headerUnLogged()
//               this.headerLogged()
//             }
//           </nav>
//           <div className="header__search">
//             <input type="text" placeholder="Buscar" />
//             <button className="btn--icon">
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <Nav
//           open={this.state.openMenu}
//           toggleMenu={this.toggleMenu}
//         />
//       </header>
//     );
//   }
// }
const Header = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const { getUserInfosReducer } = useSelector(state => state);
  const { nome, perfil } = getUserInfosReducer.userInfos;

  const toggleMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  const handleLogout = () => {
    logout();
    dispatch(sendLogout());
  };

  return (
    <header className="header">
      <div className="header__container">
        <button onClick={() => toggleMenu()} className={`btn--icon ${openMenu ? 'btn--close' : ''}`}>
          {!openMenu ? <FaBars /> : <FaTimes />}
        </button>
        <div className="header__brand">
          <img src={LogoLiloo} alt="Logotipo da liloo" className="brand" />
        </div>
        <nav className={`header__dynamic ${!nome && 'hide'}`}>
          <div className="header__perfil">
            <div className="header__perfil-photo" />
            <strong>{nome}</strong>
            <button onClick={handleLogout}>sair</button>
          </div>
          {
            nome ? headerLogged() : headerUnLogged()
          }
        </nav>
        <div className="header__search">
          <input type="text" placeholder="Buscar" />
          <button className="btn--icon">
            <FaSearch />
          </button>
        </div>
      </div>
      <Nav
        open={openMenu}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;

