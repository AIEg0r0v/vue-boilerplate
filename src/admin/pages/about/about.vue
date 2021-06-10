<template lang="pug">
  .container
    .header
      .title Block "About Me"
      iconed-btn(type="iconed" title="Add Category" @click="addCategory")
    ul.categories
      li(v-for="category in categories").category
        category(
          :category="category"
            @skillAdded="onSkillAdded"
            @skillDeleted="onSkillDeleted"
            @skillUpdated="onSkillUpdated"
            @deleted="onCategoryDeleted"
            @updated="onCategoryUpdated"
        )
      

</template>

<script>
import iconedBtn from '../../components/button/button.vue'
import category from '../../components/category/category.vue'

export default {
  components: {
    iconedBtn, category
  },
  data() {
      return {
          categories: []
      }
  },
  created(){
      this.categories = require('../../../data/skills.json');
  },
  methods: {
    onSkillAdded({categoryId, skill}) {
      console.log("onSkillAdded");
      console.log(categoryId, skill);
      var category = this.categories.filter( (c) => c.id === categoryId)[0];
      var savedSkill = this.saveSkill(this.categories, skill)
      category.skills.push(savedSkill);
    },
    onSkillDeleted({categoryId, id}) {
      console.log("onSkillDeleted");
      console.log(categoryId, id);
      var category = this.categories.filter( (c) => c.id === categoryId)[0];
      category.skills = category.skills.filter( (skill) => skill.id !== id );
    },
    onSkillUpdated({categoryId, skill}) {
      console.log("onSkillUpdated");
      console.log(categoryId, skill);
      var category = this.categories.filter( (c) => c.id === categoryId)[0];
      var skillToUpdate = category.skills.filter( (s) => s.id === skill.id)[0];
      skillToUpdate.name = skill.name;
      skillToUpdate.value = skill.value;
      //somehow need do disable canEdit in the skill

    },
    onCategoryDeleted(categoryId) {
      console.log("onCategoryDeleted");
      console.log(categoryId);
      this.categories = this.categories.filter( (category) => category.id !== categoryId );
      
      //If the categories are not saved, then after adding a bunch of new ones we will delete all of the unsaved
      //we shoud delete just THIS category

    },
    onCategoryUpdated(category) {
      console.log("onCategoryUpdated");
      console.log(category);
      var categoryToUpdate = this.categories.filter(c => c.id === categoryId)[0];
      categoryToUpdate.name = category.name;
      categoryToUpdate.skills = category.skills;

      //somehow need do disable canEdit in the category title
    },
    saveSkill(categories, skill) {
      //assuming on saveSkill go to backend and save the skill. 
      //We are getting back a skill with a proper new id
      //this function is just facking it.
      var skillIds = categories.map( x => x.skills).flat().map( x => x.id);
      var lastId = skillIds.reduce((id, currentId) => {var maxId = currentId >= id ?  currentId : id; return maxId});
      skill.id = lastId + 1;
      return skill;
    },
    addCategory(){
      this.categories.push({});
    }
  }
}
</script>
<style lang="postcss" scoped src="./about.pcss"></style>