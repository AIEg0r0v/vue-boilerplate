<template lang="pug">
    .tag {{title}}
      icon(v-if="cross" grayscale symbol="cross" @click="$emit('deleted', $event)").tag-icon
</template>

<script>
import icon from "../icon/icon.vue"

export default {
  components: {
    icon
  },
  props: {
    cross: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>