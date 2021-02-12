import axios from 'axios'

export const api = axios.create ({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/',
  headers: {"Access-Control-Allow-Origin": "*"}
});

api.interceptors.request.use (
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default api;

  