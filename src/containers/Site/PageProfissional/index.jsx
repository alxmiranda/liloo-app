import React, { Component } from 'react';
import TemplateSite from './../../../components/TemplateSite';

class PageProfissional extends Component {
  componentWillMount() {
    console.log(this);
  }

  render() {
    return (
      <TemplateSite>
        <div className="page-services container">
          <h2 className="page-services__title">Serviço</h2>
          
          <div className="page-services__content">
            <aside className="page-services__aside">
              <h3>onde estou agora</h3>
              <div className="serach-serces">
                <div className="serach-serces__content">
                  <input type="text" placeholder="Informe CEP"/>
                </div>
                <button className="btn">Obter localização</button>
              </div>
              <h3>Distancia</h3>
              <div className="list-filter">
                <label className="list-filter__item" htmlFor="distance-1">
                  <input type="radio" name="distance" id="distance-1" />
                  <span>Perto de mim (1Km)</span>
                </label>
                <label className="list-filter__item" htmlFor="distance-2">
                  <input type="radio" name="distance" id="distance-2" />
                  <span>Perto de mim (5Km)</span>
                </label>
                <label className="list-filter__item" htmlFor="distance-3">
                  <input type="radio" name="distance" id="distance-3" />
                  <span>Perto de mim (10Km)</span>
                </label>
                <label className="list-filter__item" htmlFor="distance-4">
                  <input type="radio" name="distance" id="distance-4" />
                  <span>Perto de mim (10+ Km)</span>
                </label>
              </div>
            </aside>

            <div className="ads">
              <article className="ads__item">
                <header className="ads__header">
                  <span className="destach">Destaque</span>

                  <img src="" className="service-banner" />

                  <div className="perfil-thumb">
                    <img src="" />
                  </div>
                </header>

                <div className="ads__content">
                  <div className="ads__time">
                    <span>Há 21 horas</span>
                  </div>

                  <div className="data-profissional">
                    <p className="data-profissional__description">Lorem ipsum dolar sit amet, conserctur adipsing elit</p>
                    <div className="data-profissional__name-and-rating">
                      <p className="data-profissional__name">Julio Vargas</p>
                      <p className="data-profissional__rating">Excelente</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="ads__item">
                <header className="ads__header">
                  <span className="destach">Destaque</span>

                  <img src="" className="service-banner" />

                  <div className="perfil-thumb">
                    <img src="" />
                  </div>
                </header>

                <div className="ads__content">
                  <div className="ads__time">
                    <span>Há 21 horas</span>
                  </div>

                  <div className="data-profissional">
                    <p className="data-profissional__description">Lorem ipsum dolar sit amet, conserctur adipsing elit</p>
                    <div className="data-profissional__name-and-rating">
                      <p className="data-profissional__name">Julio Vargas</p>
                      <p className="data-profissional__rating">Excelente</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="ads__item">
                <header className="ads__header">
                  <span className="destach">Destaque</span>

                  <img src="" className="service-banner" />

                  <div className="perfil-thumb">
                    <img src="" />
                  </div>
                </header>

                <div className="ads__content">
                  <div className="ads__time">
                    <span>Há 21 horas</span>
                  </div>

                  <div className="data-profissional">
                    <p className="data-profissional__description">Lorem ipsum dolar sit amet, conserctur adipsing elit</p>
                    <div className="data-profissional__name-and-rating">
                      <p className="data-profissional__name">Julio Vargas</p>
                      <p className="data-profissional__rating">Excelente</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="ads__item">
                <header className="ads__header">
                  <span className="destach">Destaque</span>

                  <img src="" className="service-banner" />

                  <div className="perfil-thumb">
                    <img src="" />
                  </div>
                </header>

                <div className="ads__content">
                  <div className="ads__time">
                    <span>Há 21 horas</span>
                  </div>

                  <div className="data-profissional">
                    <p className="data-profissional__description">Lorem ipsum dolar sit amet, conserctur adipsing elit</p>
                    <div className="data-profissional__name-and-rating">
                      <p className="data-profissional__name">Julio Vargas</p>
                      <p className="data-profissional__rating">Excelente</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </TemplateSite>
    );
  }
}

export default PageProfissional;
