<template lang="pug">
  .avatar-component
    .avatar-wrapper(:style="measures")
      img(
        v-bind="$attrs"
        alt="user picture"
        
      ).image
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "3"
    },
    title: {
      type: String,
      default: "Freddy Johanson"
    }
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>