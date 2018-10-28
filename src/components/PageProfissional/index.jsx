import React, { Component } from 'react';

class PageProfissional extends Component {
  componentWillMount() {
    console.log(this);
  }

  render() {
    return (
      <div className="page-services">
        <h2 className="page-services__title">Serviço</h2>

        <aside className="page-services__aside">
          <h3>onde estou agora</h3>
          <div className="serach-serces">
            <input type="text" />
            <button>Obter localização</button>
          </div>
          <h3>Distancia</h3>
          <label htmlFor="distance-1">
            <input type="radio" name="" id="distance-1" />
            <span>Perto de mim (1Km)</span>
          </label>
          <label htmlFor="distance-2">
            <input type="radio" name="" id="distance-2" />
            <span>Perto de mim (5Km)</span>
          </label>
          <label htmlFor="distance-3">
            <input type="radio" name="" id="distance-3" />
            <span>Perto de mim (10Km)</span>
          </label>
          <label htmlFor="distance-4">
            <input type="radio" name="" id="distance-4" />
            <span>Perto de mim (10+ Km)</span>
          </label>
        </aside>

        <div className="ads">
          <article className="ads__ad">
            <header>
              <div>
                <span>Destaque</span>
              </div>
              <img src="" />
            </header>
            <div className="ads__time">
              <span>Há 21 horas</span>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default PageProfissional;
