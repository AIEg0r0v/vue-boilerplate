<template lang="pug">
  .container
    .header
      .title Block "About Me"
      iconed-btn(type="iconed" title="Add Category" @click="addCategory")
    ul.categories
      li(v-for="category in categories").category
        category(
          :category="category"
            @skillDeleted="onSkillDeleted"
            @skillUpdated="onSkillUpdated"
            @deleted="onCategoryDeleted"
            @updated="onCategoryUpdated"
        )
      

</template>

<script>
import iconedBtn from '../../components/button/button.vue'
import category from '../../components/category/category.vue'
import {mapState, mapMutations} from "vuex";

export default {
  components: {
    iconedBtn, category
  },
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
      categories: state => state.about.categories
    })
  },
  created(){
      var categories = require('../../../data/skills.json');
      this.loadCategories(categories);
      this.categories = categories;
  },
  methods: {
    
    ...mapMutations(['loadCategories']),

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
    addCategory(){
      //come up with provisionary id for category
      this.categories.push({id:0, skills:[]});
    }
  }
}
</script>
<style lang="postcss" scoped src="./about.pcss"></style>