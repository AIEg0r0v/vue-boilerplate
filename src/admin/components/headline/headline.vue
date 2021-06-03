<template lang="pug">
  .headline-component
    .container
      .headline-container
        slot
        .headline-title {{title}}
        .headline-btns
          button(type="button").headline-btn Exit
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Admin Panel"
    }
  },
  computed: {
    
  }
};
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>
