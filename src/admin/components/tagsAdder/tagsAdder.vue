<template lang="pug">
  .tags-adder-component
    app-input(
      :title="title"
      v-model="currentTags"
      @input="$emit('change', currentTags.split(',').map(x => x.trim()).filter(x => x !== ''))"
    ).title
    ul.tags
      li.tag(
        v-for="(tag, index) in tagsArray"
        :key="`${tag}${index}`"
        v-if="tag.trim()"
      )
        tag(
          @click="onDeleteTag(tag)"
          v-if="tag.trim()"
          :title="tag" 
          cross
        )
</template>

<script>
import appInput from "../input/input.vue"
import tag from "../tag/tag.vue"

export default {
  components: {
    appInput, tag
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: []
    },
  },
  model: {
    prop: "tags",
    event: "change"
  },
  data() {
    return {
      currentTags: this.tags.join(", ")
    }
  },
  computed: {
    tagsArray(){
      return this.currentTags.split(',').map(x => x.trim()).filter(x => x !== '');
    }
  },
  methods: {
    onDeleteTag(tag){
      const tags = [...this.tags];
      const index = tags.indexOf(tag);

      if( index < 0) {return;}

      tags.splice(index,1);
      this.currentTags = tags.join(", ");
      this.$emit('change', tags)
    }
  }
}
</script>

<style lang="postcss" scoped src="./tagsAdder.pcss"></style>