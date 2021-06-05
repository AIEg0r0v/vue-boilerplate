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
          iconed-btn(type="iconed" title="Add group")
</template>

<script>
import '../styles/main.pcss'
import user from './components/user/user.vue'
import headline from './components/headline/headline.vue'
import navigation from './components/navigation/navigation.vue'
import iconedBtn from './components/button/button.vue'

export default {
  components: {
    user, headline, navigation, iconedBtn
  },
  setup() {
    
  },
}
</script>
<style lang="postcss" scoped src="./app.pcss"></style>