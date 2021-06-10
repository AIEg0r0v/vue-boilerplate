import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "./pages/about/about.vue"
import works from "./pages/works/works.vue"
import reviews from "./pages/reviews/reviews.vue"


const routes = [
  {
    path: '/admin',
    component: about
  },
  {
    path: '/admin/about',
    component: about
  },
  {
    path: '/admin/works',
    name: '',
    component: works
  },
  {
    path: '/admin/reviews',
    component: reviews
  }
];

export default new VueRouter({ routes, mode: 'history'});