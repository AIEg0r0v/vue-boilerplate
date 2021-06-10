<template lang="pug">
  button( 
    v-on="$listeners"
  ).button-component.before-component(:style="measures") {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Добавить группу"
    },
    size: {
      type: String,
      default: "1.25"
    },
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        '--button-size': `${size}rem`
      }
    }
  }
};
</script>


<style lang="postcss" scoped src="./iconedBtn.pcss"></style>