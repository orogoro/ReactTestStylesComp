import axios from 'axios';

async function dashboard() {
  try {
    const { data } = await axios.get('/dashboard');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { dashboard };
