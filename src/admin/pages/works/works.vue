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

export default {
  components: {
    work, squareBtn
  },
  data() {
      return {
        works:[]
      }
  },
  methods: {
    onWorkCreate(){
      console.log('todo: create work');
    },
    updateImagesPath(works){
      return works.map(work => {
          var imagePath = require(`../../../images/content/${work.image}`).default;
          //temp fix
          imagePath = `http://localhost:8080/${imagePath}`
          
          work.image = imagePath;
          return work
      })
    }
  },
  created(){
    const works =  require('../../../data/works.json');
    this.works = this.updateImagesPath(works);
  }
  
}
</script>
<style lang="postcss" scoped src="./works.pcss"></style>