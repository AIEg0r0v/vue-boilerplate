import axios from "axios";
import router from './router'

const instance = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

const token = window.localStorage.getItem("token");

if(token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

instance.interceptors.response.use(
  response => response,
  error => {

    const originalRequest = error.config;

    if(error.response.status === 401)
    {
      router.replace('/login');
    }

    return Promise.reject(error);
  }
);

export default instance;