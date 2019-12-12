export const TOKEN_KEY = 'INFO_LILOO';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getUser = () => JSON.parse(localStorage.getItem(TOKEN_KEY));
export const getAccessKey = () => getUser() && getUser().perfilAPI.accessKey;
export const getProfile = () => getUser() && getUser().perfilAPI.perfil;

export const login = (data) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
