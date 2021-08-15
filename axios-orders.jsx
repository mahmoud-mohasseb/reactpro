import axios from 'axios';
// CREATING INSTANCE FOR AXIOS

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH.FIREBASE,
});

export default instance;

