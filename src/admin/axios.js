import axios from "axios";
const instance = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});
//history mode create a bunch of problems, so I disabled it for now

export default instance;