const keyUser = 'liloo_user';
const saveUser = data => localStorage.setItem(keyUser, JSON.stringify(data));
const getUser = () => JSON.parse(localStorage.getItem(keyUser));
const deleteUser = () => {
  localStorage.removeItem(keyUser);
};

export {
  keyUser,
  saveUser,
  getUser,
  deleteUser,
};
