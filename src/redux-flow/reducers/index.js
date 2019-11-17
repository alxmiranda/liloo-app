import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import sendRegisterReducer from '../../containers/Register/reducer';
import sendLoginReducer from '../../containers/Login/reducer';
import getUserInfosReducer from '../../containers/ProfilePage/reducer';

// const history = createBrowserHistory();
const reducers = history => combineReducers({
  sendRegisterReducer,
  sendLoginReducer,
  getUserInfosReducer,
  router: connectRouter(history),
});

export default reducers;
