import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import getRoutes from './containers/Routes';
// import store from './redux-flow';
import configureStore, { history } from './configureStore';
import './styles/global.scss';

// const history = createBrowserHistory();
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        { getRoutes(store) }
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export default App;

