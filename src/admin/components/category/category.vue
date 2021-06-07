<template lang="pug">
  .category-component
    card
      edit-line(
        slot="title", 
        v-model="category.name",
        defaultEditMode
        @remove="$emit('remove'), $event"
      ).category-title
      template(slot="content")
        ul.skills
          li.item(
            v-for="skill in category.skills" 
            :key="skill.id"
          ) 
            skill(
              @skillDeleted="onSkillDelete"
              @skillChanged="onSkillChange"
              :skill="skill"
            )
        skill-add-line(
          @skillAdded="onSkillAdd"
        ).skills-add-line
</template>

<script>

import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
  components: { card, editLine, skill, skillAddLine
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data(){
    return{
     
    }
  },
  methods: {
    onSkillAdd(skill){
      console.log('Adding a skill to a category');
      console.log(skill);
      this.category.skills.push(skill);
    },
    onSkillChange(updatedSkill, event){
      console.log('Changing a skill in a category');
      console.log(skill);
      console.log(event);
      var skillToUpdate = this.category.skills.filter((skill) => { skill.id === updatedSkill.id })
      skillToUpdate.name = updatedSkill.name;
      skillToUpdate.value = updatedSkill.value;
    },
    onSkillDelete(skillId){
      console.log('Deleting a skill from a category');
      console.log(skillId);
      this.category.skills = this.category.skills.filter( (skill) => { skill.id !== skillId });
    }

  },
  computed: {
    
  }
};
</script>

<style lang="postcss" scoped src="./category.pcss"></style>
