const keyUser = 'liloo_user';
const saveUser = data => localStorage.setItem(keyUser, JSON.stringify(data));
const getUser = () => JSON.parse(localStorage.getItem(keyUser));
export {
  keyUser,
  saveUser,
  getUser,
};
