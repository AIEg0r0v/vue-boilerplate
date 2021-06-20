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
    console.log(originalRequest);
    if(error.response.status === 401)
    {
      var newToken;
      await axios.post(`${apiBaseUrl}/refreshToken`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        } 
      }).then( c => {
          console.log("Successfully refreshed token");
          newToken = c.data.token;
        }, e => {
          console.log('Unable to refresh token');
          if(e.response.status === 400) {
            console.log(e.response.data[0]);
          }
          router.replace('/login')
        });
      
      console.log("after await");
      window.localStorage.setItem('token', newToken);
      instance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      
      return instance(originalRequest)
    }

    return Promise.reject(error);
  }
);

export default instance;