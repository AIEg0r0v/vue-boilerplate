<template lang="pug">
  .container
    .header
      .title Block "Works"
    editWork(v-if="editMode" :work="newWork")
    ul.works
      li().work
        square-btn( 
          type="square"
          title="Add work" 
          @click="onWorkCreate" 
        )
      li(v-for="work in works").work
        work(:work="work" @editRequested="onEditRequested" @deleted="deleteWork")      

</template>

<script>
import work from '../../components/work/work.vue'
import card from '../../components/card/card.vue'
import tagsAdder from '../../components/tagsAdder/tagsAdder.vue'
import appInput from "../../components/input/input.vue"
import defaultBtn from "../../components/button/types/defaultBtn/defaultBtn.vue";
import squareBtn from "../../components/button/button.vue"; 
import editWork from "../../components/editWork/editWork.vue"; 
import { mapState, mapMutations, mapActions } from "vuex";
// import regeneratorRuntime from "regenerator-runtime";

export default {
  components: {
    work, squareBtn, defaultBtn, card, tagsAdder, appInput, editWork
  },
  data() {
      return {
        editMode: true,
        newWork: {
          id:0, tags: [], title: '', description: '', link: '', image: {}, preview: '' 
        }
      }
  },
  computed:{
    ...mapState({
      works: state => state.works.works,
      userid: state => state.login.userId
    })
  },
  methods: {
    ...mapMutations(['loadWorks', 'deleteWork' , 'SET_WORKS']),
    onEditRequested(work){
      this.newWork = {...work};
      console.log(this.newWork);
      this.editMode = true;
    },
    onWorkCreate(){
      console.log('todo: create work');
      this.newWork = {id:0, tags: [], title: '', description: '', link: ''};
      this.editMode = true;
    }
  },
  created(){
    this.loadWorks(this.userid);
  }
  
}
</script>
<style lang="postcss" scoped src="./works.pcss"></style>