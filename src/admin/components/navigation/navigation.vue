<template lang="pug">
  .navigation-component
    .container
      ul.list
        li(
          v-for="tab in tabs" 
          :class="{activeTab: tab.active}"
          :key="tab.id").item
          a(:href="`/${tab.alias}`").link {{tab.title}}
</template>


<script>
const defaultTabs = [
{id: 0, title: "About", alias: "about", active: false},
{id: 1, title: "Works", alias: "works", active: true},
{id: 2, title: "Reviews", alias: "reviews", active: false},
];

export default {
  props: {
    tabs: {
      type: Array,
      default: defaultTabs
    }
  },
  computed: {

  }
}
</script>
<style lang="postcss" scoped src="./navigation.pcss"></style>