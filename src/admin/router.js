import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "./pages/about/about.vue"
import works from "./pages/works/works.vue"
import reviews from "./pages/reviews/reviews.vue"
import login from "./pages/login/login.vue"


const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: login
  },
  {
    path: '/about',
    component: about          
  },
  {
    path: '/works',
    name: '',
    component: works
  },
  {
    path: '/reviews',
    component: reviews
  }
];
//history mode create a bunch of problems, so I disabled it for now
export default new VueRouter({ routes});