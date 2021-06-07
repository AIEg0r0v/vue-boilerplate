<template lang="pug">
  .app-container
    headline(title="Admin Panel")
      user(
        :picture='require("../images/content/alex.jpg").default'
        name="Alexander Egorov"
      )
    navigation
    .page-content
      .container
        .header
          .title Block "About Me"
          iconed-btn(type="iconed" title="Add Category")
        ul.categories
          li(v-for="category in categories").category
            category(:category="category")
</template>

<script>
import '../styles/main.pcss'
import user from './components/user/user.vue'
import headline from './components/headline/headline.vue'
import navigation from './components/navigation/navigation.vue'
import iconedBtn from './components/button/button.vue'
import category from './components/category/category.vue'

export default {
  components: {
    user, headline, navigation, iconedBtn, category
  },
  data() {
      return {
          categories: []
      }
  },
  created(){
      this.categories = require('../data/skills.json')
  },
  setup() {
    
  },
}
</script>
<style lang="postcss" scoped src="./app.pcss"></style>