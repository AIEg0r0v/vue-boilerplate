import axios from "axios";
import router from './router'
import regeneratorRuntime from "regenerator-runtime";

const apiBaseUrl = 'https://webdev-api.loftschool.com';

const instance = axios.create({
  baseURL: apiBaseUrl
});

const token = window.localStorage.getItem("token");

if(token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

instance.interceptors.response.use(
  response => response,
  async error => {

    const originalRequest = error.config;

    if(error.response.status === 401)
    {
      const response = await axios.post(`${apiBaseUrl}/refreshToken`);
      const newToken = response.data.token;

      window.localStorage.setItem('token', newToken);
      instance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      originalRequest.headers.common['Authorization'] = `Bearer ${newToken}`;
      
      return instance(originalRequest)
      // router.replace('/login');
    }

    return Promise.reject(error);
  }
);

export default instance;