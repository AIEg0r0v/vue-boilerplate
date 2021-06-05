<template lang="pug">
  .category-component
    card
      editLine(
        slot="title", 
        v-model="category.name",
        defaultEditMode
      ) Category Name 
      ul(slot="content").skills
        li.item(v-for="skill in category.skills" :key="skill.id") 
          skill(:skill="skill")
</template>

<script>

import card from "../card";
import editLine from "../editLine";
import skill from "../skill";

const defaultSkills = [
  {id: 0, name: "Skill 1", value: 25},
  {id: 1, name: "Skill 2", value: 77}
];
const defaultCategory = {
  id: 0,
  name: "Frontend / Backend",
  skills: defaultSkills
};
export default {
  components: { card, editLine, skill
  },
  props: {
    category: {
      type: Object,
      default: () => defaultCategory,
      required: true
    }
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
