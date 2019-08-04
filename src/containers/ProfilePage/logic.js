import { createLogic } from 'redux-logic';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getUserInfosError, getUserInfosSuccess } from './actions';
import { GET_USER_INFOS } from './constants';
import { getUser } from './../../utils/user';

const getUserInfosLogic = createLogic({
  type: GET_USER_INFOS,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process({ action }, dispatch, done) {
    const requestURL = `${process.env.API_URL}/registerdetails`;
    const data = getUser();

    const options = {
      headers: {
        accessKey: data.data.perfilAPI.accessKey,
        perfil: data.data.perfilAPI.perfil,
      },
    };
    axios.get(requestURL, options).then((success) => {
      if (success.data.codeRestult === 1) {
        dispatch(getUserInfosError(success.data.errorMsg));
      } else {
        // saveUser(success.data);
        console.log(success, '>>>><<');
        dispatch(getUserInfosSuccess(success.data.data));
      }
    }).catch((error) => {
      dispatch(getUserInfosError(error));
    }).then(done);
  },
});

export default getUserInfosLogic;
