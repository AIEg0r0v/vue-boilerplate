import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import login from "./modules/login";
import about from "./modules/about";


export const store = new Vuex.Store({
  modules: {
      login, 
      about
  }
});