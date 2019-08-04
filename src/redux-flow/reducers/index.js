import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sendRegisterReducer from '../../containers/Register/reducer';
import sendLoginReducer from '../../containers/Login/reducer';
import getUserInfosReducer from '../../containers/ProfilePage/reducer';

const reducers = combineReducers({
  routerReducer,
  sendRegisterReducer,
  sendLoginReducer,
  getUserInfosReducer,
});

export default reducers;
