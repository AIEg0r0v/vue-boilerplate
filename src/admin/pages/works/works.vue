<template lang="pug">
  .container
    .header
      .title Block "Works"
    editWork(
      v-if="editMode" 
      :work="newWork"
      @editCancelled="onEditCancelled"
      @editCompleted="onEditCompleted"
    )
    ul.works
      li().work
        square-btn( 
          type="square"
          title="Add Work" 
          @click="onWorkCreate" 
        )
      li(v-for="work in works").work
        work(
          :disabled="work.id === newWork.id"
          :work="work" 
          @editRequested="onEditRequested" 
          @deleted="deleteWork"
        )      

</template>

<script>
import work from '../../components/work/work.vue'
import squareBtn from "../../components/button/button.vue"; 
import editWork from "../../components/editWork/editWork.vue"; 
import { mapState, mapActions } from "vuex";

export default {
  components: {
    work, squareBtn, editWork
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
    ...mapActions(["addWork", "updateWork", "deleteWork", "fetchWorks"]),

    onEditRequested(work){
      this.newWork = {...work};
      console.log(this.newWork);
      this.editMode = true;
    },
    onWorkCreate(){
      this.newWork = {id:0, tags: [], title: '', description: '', link: ''};
      this.editMode = true;
    },
    onEditCancelled(){
      this.editMode = false;
      this.newWork = {id:0, tags: [], title: '', description: '', link: ''};
    },
    async onEditCompleted(work){

      if(work.id !== 0) {
        await this.updateWork(work);
      } else {
        await this.addWork(work);
      }
      this.editMode = false;
    }
  },
  async created(){
    await this.fetchWorks(this.userid);
  }
  
}
</script>
<style lang="postcss" scoped src="./works.pcss"></style>