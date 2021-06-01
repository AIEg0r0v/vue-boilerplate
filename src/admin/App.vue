<template lang="pug">
  headline(title="Admin Panel")
    avatar(
      :size="3.1" 
      src="https://picsum.photos/300/300"
      title="Alexander Egorov"
    )
</template>

<script>
import '../styles/main.pcss'
import avatar from './components/avatar/avatar.vue'
import headline from './components/headline/headline.vue'

export default {
  components: {
    avatar, headline
  },
  setup() {
    
  },
}
</script>
