<template lang="pug">
  .tags-adder-component
    app-input(
      :title="title"
      v-model="currentTags"
    ).title
    ul.tags
      li.tag(
        v-for="(tag, index) in tags"
        :key="`${tag}${index}`"
      )
        tag(:title="tag" cross)
</template>

<script>
import appInput from "../input/input.vue"
import tag from "../tag/tag.vue"

export default {
  components: {
    appInput, tag
  },
  data() {
    return {
      currentTags: "one, two, three"
    }
  },
  computed: {
    tags(){
      return this.currentTags.trim().split(',');
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped src="./tagsAdder.pcss"></style>