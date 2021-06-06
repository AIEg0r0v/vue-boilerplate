<template lang="pug">
  .category-component
    card
      edit-line(
        slot="title", 
        v-model="category.name",
        defaultEditMode
      ).category-title
      template(slot="content")
        ul.skills
          li.item(
            v-for="skill in category.skills" 
            :key="skill.id"
          ) 
            skill(
              :skill="skill"
            )
        skill-add-line(
          
        ).skills-add-line
</template>

<script>

import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

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
  components: { card, editLine, skill, skillAddLine
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
