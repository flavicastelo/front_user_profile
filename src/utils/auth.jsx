const isLogged = localStorage.getItem('token') !== null;
const login = (token) => localStorage.setItem('token', token);
const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('user_name');
};
const setIdUser = (idUser) => localStorage.setItem('idUser', idUser);
const setUserName = (name) => localStorage.setItem('user_name', name);

export {isLogged, login, logout, setIdUser, setUserName};