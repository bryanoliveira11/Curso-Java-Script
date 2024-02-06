import axios from 'axios';

export default axios.create({
  // rest api url
  baseURL: 'http://127.0.0.1:8000',
});
