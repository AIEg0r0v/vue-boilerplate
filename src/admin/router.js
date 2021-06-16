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
    component: login,
    meta: {
      public: true
    }
  },
  {
    path: '/',
    component: about
  },
  {
    path: '/about',
    component: about  ,
    meta: {
      public: false
    }        
  },
  {
    path: '/works',
    name: '',
    component: works,
    meta: {
      public: false
    }
  },
  {
    path: '/reviews',
    component: reviews,
    meta: {
      public: false
    }
  }
];
//history mode create a bunch of problems, so I disabled it for now

const router = new VueRouter({ routes});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  const isPublicRoute = to.matched.some(r => r.meta.public);
  const isLoggedIn = window.localStorage.getItem('token') != null && window.localStorage.getItem('userId') != null ;
  
  if(isPublicRoute === false && isLoggedIn === false ){
    console.log("Not a public route and not logged it");
    window.sessionStorage.setItem('redirectPath', to.path);
    router.replace("/login");
  } else {
    next();
  }
});
export default router;