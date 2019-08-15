import sendRegisterLogic from './../../containers/Register/logic';
import sendLoginLogic from './../../containers/Login/logic';
import getUserInfosLogic, { postUserInfosLogic } from './../../containers/ProfilePage/logic';

export default [
  sendRegisterLogic,
  sendLoginLogic,
  getUserInfosLogic,
  postUserInfosLogic,
];
