import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087'
});

export default Instance;