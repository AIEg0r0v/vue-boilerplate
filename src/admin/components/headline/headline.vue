<template lang="pug">
  .headline-component
    .container
      .headline-container
        slot
        .headline-title {{title}}
        .headline-btns
          button(type="button" @click="logout").headline-btn Exit
</template>

<script>
import {mapMutations} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "Admin Panel"
    }
  },
  methods: {
    ... mapMutations(['logout'])   
  }
};
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>
