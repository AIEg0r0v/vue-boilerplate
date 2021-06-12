<template lang="pug">
  .container
    .header
      .title Block "About Me"
      iconed-btn(type="iconed" title="Add Category" @click="addCategory")
    ul.categories
      li(v-for="category in categories").category
        category(
          :category="category"
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
  },
  methods: {
    
    ...mapMutations(['loadCategories', 'addCategory']),

  }
}
</script>
<style lang="postcss" scoped src="./about.pcss"></style>