import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogicMiddleware } from 'redux-logic';
import createRootReducer from './../src/redux-flow/reducers';
import request from './utils/requests';
import logicList from './redux-flow/logics';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const injectedHelpers = { request };
  const logicMiddleware = createLogicMiddleware(logicList, injectedHelpers);

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        logicMiddleware,
      ),
    ),
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../src/redux-flow/reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
