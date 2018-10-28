import React from 'react';
import ReactSVG from 'react-svg';
import MenuCasa from './../../assets/home/icon-menu-casa.svg';
import MenuFilho from './../../assets/home/icon-menu-filho.svg';
import MenuIdoso from './../../assets/home/icon-menu-idoso.svg';
import MenuPet from './../../assets/home/icon-menu-pet.svg';
import MenuReforma from './../../assets/home/icon-menu-reformas.svg';
import MenuPessoais from './../../assets/home/icon-menu-pessoais.svg';
import MenuAssTec from './../../assets/home/icon-menu-assistencia-tecnica.svg';
import MenuCarro from './../../assets/home/icon-menu-carro.svg';
import MenuTransporte from './../../assets/home/icon-menu-transport.svg';
import MenuEventos from './../../assets/home/icon-menu-eventos.svg';
import MenuOutros from './../../assets/home/icon-menu-outros.svg';

let open = false;

const openMenu = (e) => {
  console.log(e);
  // e.target.preventDefault();
  if (!open) {
    open = true;
  } else {
    open = false;
  }
};

const menu = props => (
  <nav className={`menu ${props.open ? 'menu--active' : ''}`}>
    <div className="menu__container">
      <div className="menu__item" />
      <div className={`menu__item ${open ? 'open' : ''}`}>
        <div className="icon-menu">
          <ReactSVG path={MenuCasa} />
          <a onClick={e => openMenu(e)} href="!#">Para sua casa </a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuFilho} />
          <a onClick={e => openMenu(e)} href="!#">Para seu filho</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuIdoso} />
          <a onClick={e => openMenu(e)} href="!#">Para o idoso</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuPet} />
          <a onClick={e => openMenu(e)} href="!#">Para seu pet</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuReforma} />
          <a href="!#">Consertos e reformas</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuPessoais} />
          <a href="!#">Cuidados pessoais</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuAssTec} />
          <a href="!#">Assistência técnica</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuCarro} />
          <a onClick={e => openMenu(e)} href="!#">Para seu carro</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuTransporte} />
          <a href="!#">Transporte</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuEventos} />
          <a href="!#">Eventos</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
      <div className="menu__item">
        <div className="icon-menu">
          <ReactSVG path={MenuOutros} />
          <a href="!#">Outros</a>
        </div>
        <ul>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
          <li>
            <a href="#">Baba</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default menu;

