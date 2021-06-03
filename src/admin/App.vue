<template lang="pug">
  .app-container
    headline(title="Admin Panel")
      user(
        :picture='require("../images/content/alex.jpg").default'
        name="Alexander Egorov"
      )
    navigation
</template>

<script>
import '../styles/main.pcss'
import user from './components/user/user.vue'
import headline from './components/headline/headline.vue'
import navigation from './components/navigation/navigation.vue'

export default {
  components: {
    user, headline, navigation
  },
  setup() {
    
  },
}
</script>
