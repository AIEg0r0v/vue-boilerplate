<template lang="pug">
  .category-component
    card
      edit-line(
        slot="title", 
        v-model.trim="category.name",
        :defaultEditMode="editMode"
        ref="editLine"
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
import {mapMutations} from "vuex";

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
      editMode: false
    }
  },
  methods: {
    ...mapMutations(['addSkill', 'deleteSkill', 'updateSkill', 'deleteCategory', 'updateCategory']),

    onSkillAdd(addedSkill){
      this.addSkill( {skill: addedSkill, categoryId: this.category.id} );
    },
    onSkillChange: function (updatedSkill){
      this.updateSkill( {skill: updatedSkill, categoryId: this.category.id} );
    },
    onSkillDelete(skillId){
      this.deleteSkill( {id: skillId, categoryId: this.category.id} );
    },
    onCategoryDelete(){
      this.deleteCategory(this.category.id);
    },
    onCategoryUpdate(){
      this.updateCategory(this.category);
      this.$refs['editLine'].editmode = false;
    },

  },
  computed: {
    
  }
};
</script>

<style lang="postcss" scoped src="./category.pcss"></style>
