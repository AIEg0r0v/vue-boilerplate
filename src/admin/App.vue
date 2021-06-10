<template lang="pug">
  .app-container
    headline(title="Admin Panel")
      user(
        :picture='require("../images/content/alex.jpg").default'
        name="Alexander Egorov"
      )
    navigation(:tabs="navTabs")
    .page-content
      router-view
</template>

<script>

const defaultTabs = [
{id: 0, title: "About", alias: "/admin/about", active: false},
{id: 1, title: "Works", alias: "/admin/works", active: true},
{id: 2, title: "Reviews", alias: "/admin/reviews", active: false},
];

import '../styles/main.pcss'
import user from './components/user/user.vue'
import headline from './components/headline/headline.vue'
import navigation from './components/navigation/navigation.vue'
import iconedBtn from './components/button/button.vue'
import category from './components/category/category.vue'
import work from "./components/work/work.vue";

export default {
  components: {
    user, headline, navigation, iconedBtn, category, work
  },
  data() {
      return {
          categories: [],
          navTabs: defaultTabs
      }
  },
  created(){
      this.categories = require('../data/skills.json');
  },
  methods: {
 
  },
  setup() {
    
  },
}
</script>
<style lang="postcss" scoped src="./app.pcss"></style>