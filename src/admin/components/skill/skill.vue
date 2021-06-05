<template lang="pug">
  .skill-component
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
    }
  },
  computed: {

  }
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>