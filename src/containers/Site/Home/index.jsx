import React from 'react';
import { Link } from 'react-router-dom';
import Lupa from './../../../assets/home/lupa.png';
import Ferramentas from './../../../assets/home/ferramentas.png';
import Balanca from './../../../assets/home/balanca.png';
import UsuarioPlus from './../../../assets/home/usuario-plus.png';
import PcEChat from './../../../assets/home/pc-e-chat.png';
import Cadeado from './../../../assets/home/cadeado.png';
import BalaoLike from './../../../assets/home/balao-like.png';
import Users from './../../../assets/home/users.png';
import TemplateSite from './../../../components/TemplateSite';

export default () => (
  <TemplateSite>
    <section className="section content content--hero" />
    <section className="section content content--como-funciona">
      <div className="container">
        <h2 className="title-page">Como o Liloo funciona?</h2>
        <div className="passo-a-passo">
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={Lupa} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>1 - Procure o que você precisa</h3>
              <p>Nas categorias, filtre o serviço para que possamos encontrar de forma mais rápida o que está buscando.</p>
            </div>
          </div>
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={Ferramentas} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>2 - Encontre Profissionais</h3>
              <p>Iremos disponibilizar os anúncios de nossos parceiros premiums e dos profissionais que estão mais próximos de você.</p>
            </div>
          </div>
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={Balanca} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>3 - Compare os anúncios</h3>
              <p>Com os dados em cada anúncio, é só entrar em contato para contratar o melhor profissional!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section content content--porque">
      <div className="container">
        <h2 className="title-page">Porque escolher a Liloo</h2>
        <div className="passo-a-passo">
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={UsuarioPlus} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>FACIL</h3>
              <p>Você escolhe o serviço e o profissional que deseja</p>
            </div>
          </div>
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={PcEChat} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>PRATICO</h3>
              <p>Tudo que você precisa em poucos cliques</p>
            </div>
          </div>
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={Cadeado} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>SEGURO</h3>
              <p>Todos os dados são criptografados e guardados em sigilo</p>
            </div>
          </div>
          <div className="passo-a-passo__passo">
            <div className="passo-a-passo__imagem">
              <img src={BalaoLike} alt="liloo" />
            </div>
            <div className="passo-a-passo__texto">
              <h3>CONFIAVEL</h3>
              <p>Profissionais capacitados e bem recomendados por outros usuários</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cadastrar" className="section content content--inicio">
      <div className="container center">
        <h2 className="title-page">Por onde começo?</h2>
        <div className="opcoes">
          <div className="box-opcao clientes">
            <div className="box-opcao__content">
              <img src={Users} alt="Para clientes" />
              <h3 className="box-opcao__title">Para clientes</h3>
            </div>
            <Link className="btn" to="/cadastro/cliente" title="Para clientes">Buscar serviço</Link>
          </div>
          <div className="box-opcao profissional">
            <div className="box-opcao__content">
              <img src={Ferramentas} alt="Para clientes" />
              <h3 className="box-opcao__title">Para profissionais</h3>
            </div>
            <Link className="btn" to="/cadastro/profissional" title="Para clientes">Anúnciar serviço</Link>
          </div>
        </div>
      </div>
    </section>
  </TemplateSite>
);
