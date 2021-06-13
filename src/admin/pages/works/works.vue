<template lang="pug">
  .container
    .header
      .title Block "Works"
    card(title="Edit work" v-if="editMode").edit__work
      template(slot="content")
        .edit__work-content-container
          .image__upload-container
            .image__upload-description Drag image here or press UPLOAD button to upload image
            defaultBtn(
              title="UPLOAD" 
              @click="uploadImage"
            ).image__upload-button
          .edit__work-container
            app-input(
              title="Name"
              v-model="newWork.title"
            ).edit__work-input.edit__work-title
            app-input(
              title="Link"
              v-model="newWork.link"
            ).edit__work-input.edit__work-link
            app-input(
              title="Description"
              fieldType="textarea"
              v-model="newWork.description"
            ).edit__work-input.edit__work-description
            tags-adder(
              title="Add tag" 
              v-model="newWork.tags"
            ).edit__work-input
            .edit__work-buttons
              defaultBtn(title="Cancel" plain @click="onWorkUpdateCanceled").edit__work-cancelbtn
              defaultBtn(title="SAVE" @click="onWorkUpdated").edit__work-savebtn
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
// import squareBtn from "../../components/button/types/squareBtn/squareBtn.vue";
import appInput from "../../components/input/input.vue"
import defaultBtn from "../../components/button/types/defaultBtn/defaultBtn.vue";
import squareBtn from "../../components/button/button.vue"; //<- this does not work!!!
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    work, squareBtn, defaultBtn, card, tagsAdder, appInput
  },
  data() {
      return {
        editMode: true,
        newWork: {
          id:0, tags: [], title: '', description: '', link: ''
        }
      }
  },
  computed:{
    ...mapState({
      works: state => state.works.works
    })
  },
  methods: {
    ...mapMutations(['loadWorks', 'addWork', 'updateWork', 'deleteWork']),

    onEditRequested(work){
      this.newWork = {...work};
      console.log(this.newWork);
      this.editMode = true;
    },
    onWorkCreated(){
      this.addWork(newWork);
    },
    onWorkCreate(){
      console.log('todo: create work');

      this.newWork = {id:0, tags: [], title: '', description: '', link: ''};
      this.editMode = true;
    },
    updateImagesPath(works){
      return works.map(work => {
          var imagePath = require(`../../../images/content/${work.image}`).default;
          //temp fix
          console.log(imagePath);
          imagePath = `http://localhost:8080/${imagePath}`
          
          work.image = imagePath;
          return work;
      })
    },
    uploadImage(){
      console.log("open dialog to upload file");
    },
    onWorkUpdateCanceled(){
      console.log("onWorkUpdateCanceled");
      this.editMode = false;
    },
    onWorkUpdated(){
      console.log("onWorkUpdated");
      if(this.works.includes(this.newWork)){

        this.updateWork(this.newWork);
      }
      else{
        this.addWork(this.newWork);
      }
      this.editMode = false;
    }
  },
  created(){
    var works =  require('../../../data/works.json');
    works = this.updateImagesPath(works);
    this.loadWorks(works);
  }
  
}
</script>
<style lang="postcss" scoped src="./works.pcss"></style>