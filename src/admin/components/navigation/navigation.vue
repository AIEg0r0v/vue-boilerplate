<template lang="pug">
  .navigation-component
    .container
      ul.list
        li(
          v-for="tab in tabs" 
          :class="{activeTab: isActive(tab)}"
          :key="tab.id").item
          router-link(tag="a" :to="tab.alias").link {{tab.title}}
</template>


<script>
const defaultTabs = [
{id: 0, title: "About", alias: "about"},
{id: 1, title: "Works", alias: "works"},
{id: 2, title: "Reviews", alias: "reviews"},
];

export default {
  props: {
    tabs: {
      type: Array,
      default: () => defaultTabs
    }
  },
  methods: {
    isActive(tab) {
      return this.$route.path === tab.alias
    }
  }
}
</script>
<style lang="postcss" scoped src="./navigation.pcss"></style>