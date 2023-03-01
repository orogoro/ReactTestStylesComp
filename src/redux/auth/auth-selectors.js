const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getUserToken = (state) => state.auth.token;
const getLoader = (state) => state.auth.loader;

export { getUserEmail, getUserToken, getIsLoggedIn, getLoader };
