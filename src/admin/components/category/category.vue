<template lang="pug">
  .category-component
    card
      editLine(
        slot="title", 
        v-model="title",
        defaultEditMode
      ) Заголовок 
      ul(slot="content").skills
        li.item 
          skill
</template>

<script>

import card from "../card";
import editLine from "../editLine";
import skill from "../skill";

export default {
  components: { card, editLine, skill
  },
  data(){
    return{
      title: "New group name"
    }
  },
  
  computed: {
    
  }
};
</script>

<style lang="postcss" scoped src="./category.pcss"></style>
