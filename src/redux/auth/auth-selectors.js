const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;
const getLoader = state => state.auth.loader;
const isRegister = state => state.auth.isRegister;

export { getUserEmail, getUserToken, getIsLoggedIn, getLoader, isRegister };
