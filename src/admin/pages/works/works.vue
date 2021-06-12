<template lang="pug">
  .container
    .header
      .title Block "Works"
    ul.works
      li().work
        square-btn( 
          type="square"
          title="Отправить" 
          @click="onWorkCreate" 
        )
      li(v-for="work in works").work
        work(:work="work")      

</template>

<script>
import work from '../../components/work/work.vue'
import squareBtn from "../../components/button/types/squareBtn/squareBtn.vue";
// import squareBtn from "../../components/button/button.vue"; //<- this does not work!!!
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    work, squareBtn
  },
  data() {
      return {
        newWork: {}
      }
  },
  computed:{
    ...mapState({
      works: state => state.works.works
    })
  },
  methods: {
    ...mapMutations(['loadWorks', 'addWork']),

    onWorkCreated(){
      this.addWork(newWork);
    },
    onWorkCreate(){
      console.log('todo: create work');

    },
    updateImagesPath(works){
      return works.map(work => {
          var imagePath = require(`../../../images/content/${work.image}`).default;
          //temp fix
          console.log(imagePath);
          imagePath = `http://localhost:8080/${imagePath}`
          
          work.image = imagePath;
          return work
      })
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