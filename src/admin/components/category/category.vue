<template lang="pug">
  .category-component
    card
      edit-line(
        slot="title", 
        v-model="category.name",
        defaultEditMode
        @remove="onCategoryDelete"
        @approve="onCategoryUpdate"
      ).category-title
      template(slot="content")
        ul.skills
          li.item(
            v-for="skill in category.skills" 
            :key="skill.id"
          ) 
            skill(
              @deleted="onSkillDelete"
              @changed="onSkillChange"
              :skill="skill"
            )
        skill-add-line(
          @added="onSkillAdd"
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
    onSkillAdd(addedSkill){
      console.log(this.category);
      this.$emit('skillAdded', {skill: addedSkill, categoryId: this.category.id});
      // this.category.skills.push(addedSkill);
    },
    onSkillChange: function (updatedSkill, event){
      this.$emit('skillUpdated', {skill: updatedSkill, categoryId: this.category.id});
      // var skillToUpdate = this.category.skills.filter((skill) => { skill.id === updatedSkill.id })
      // skillToUpdate.name = updatedSkill.name;
      // skillToUpdate.value = updatedSkill.value;
    },
    onSkillDelete(skillId){
      this.$emit('skillDeleted', {id: skillId, categoryId: this.category.id});
      // this.category.skills = this.category.skills.filter( (skill) => { skill.id !== skillId });
    },
    onCategoryDelete(){
      this.$emit('deleted', this.category.id)
    },
    onCategoryUpdate(name){
      this.$emit('updated', this.category)
    }

  },
  computed: {
    
  }
};
</script>

<style lang="postcss" scoped src="./category.pcss"></style>
