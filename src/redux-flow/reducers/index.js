import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sendRegisterReducer from '../../containers/Register/reducer';
import sendLoginReducer from '../../containers/Login/reducer';

const reducers = combineReducers({
  routerReducer,
  sendRegisterReducer,
  sendLoginReducer,
});

export default reducers;
