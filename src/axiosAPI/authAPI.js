import axios from 'axios';

axios.defaults.baseURL = 'https://vindev.cx.ua';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

async function register(credentials) {
  try {
    const { data } = await axios.post('/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function login(credentials) {
  try {
    const { data } = await axios.post('/signin', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function logOut() {
  try {
    token.unset();
  } catch (error) {
    console.log(error);
  }
}

async function currentUser(persistedToken) {
  token.set(persistedToken);

  try {
    const { data } = await axios.get('/user');
    return data.user;
  } catch (error) {
    console.log(error);
  }
}

export { register, login, logOut, currentUser };
