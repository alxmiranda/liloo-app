const keyUser = 'liloo_user';
const isAuthenticated = () => localStorage.getItem(keyUser) !== null;
const saveUser = data => localStorage.setItem(keyUser, JSON.stringify(data));
const getUser = () => JSON.parse(localStorage.getItem(keyUser));
const getAccessKey = () => getUser() && getUser().perfilAPI.accessKey;
const getProfile = () => getUser() && getUser().perfilAPI.perfil;
const deleteUser = () => {
  localStorage.removeItem(keyUser);
};

export {
  isAuthenticated,
  keyUser,
  saveUser,
  getUser,
  getAccessKey,
  getProfile,
  deleteUser,
};
