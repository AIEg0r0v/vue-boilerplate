<template lang="pug">
  a(:href="link").user-component
    avatar(size="3.1" :src="picture")
    .name {{name}}
</template>


<script>
import avatar from "../avatar";

export default {
  components: {
    avatar
  },
  props: {
    picture: {
      type: String,
      default: "https://picsum.photos/300/300"
    },
    name: {
      type: String,
      default: "Freddy Johanson"
    },
    link: {
      type: String,
      default: '/'
    }
  },
  computed: {

  }
}
</script>
<style lang="postcss" scoped src="./user.pcss"></style>