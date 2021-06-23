<template lang="pug">
  .container
    .header
      .title Block "Reviews"
    edit-review(
      v-if="editMode" 
      :review="newReview"
      @editCancelled="onEditCancelled"
      @editCompleted="onEditCompleted"
    )
    ul.reviews
      li().review
        square-btn( 
          type="square"
          title="Add Review" 
          @click="onReviewCreate" 
        )
      li(v-for="review in reviews").review
        review(
          :review="review"
          :disabled="review.id === newReview.id"
          @editRequested="onEditRequested"
          @deleted="deleteReview"
        )     
      

</template>

<script>
import review from '../../components/review/review.vue'
import editReview from '../../components/editReview/editReview.vue'
import squareBtn from "../../components/button/button.vue"; 
import { mapState, mapActions } from "vuex";


export default {
  components: {
    review, squareBtn, editReview
  },
  data() {
      return {
        editMode: true,
        newReview: {
          id:0, reviewer: { name: '', title: '', avatar: '', preview: '' }, text: '' 
      }
    }
  },
  computed:{
    ...mapState({
      reviews: state => state.reviews.reviews,
      userid: state => state.login.userId
    })
  },
  methods: {
    ...mapActions(["addReview", "updateReview", "deleteReview", "fetchReviews"]),

    onEditRequested(review){
      this.newReview = {...review};
      this.editMode = true;
    },
    onReviewCreate(){
      this.newReview = {  id:0, reviewer: { name: '', title: '', avatar: '', preview: '' }, text: ''  };
      this.editMode = true;
    },
    onEditCancelled(){
      this.editMode = false;
      this.newReview = {  id:0, reviewer: { name: '', title: '', avatar: '', preview: '' }, text: ''  };
    },
    async onEditCompleted(review){

      if(review.id !== 0) {
        await this.updateReview(review);
      } else {
        await this.addReview(review);
      }
      this.editMode = false;
    }
  },
  
  async created(){
    await this.fetchReviews(this.userid);
  }
  
}
</script>
<style lang="postcss" scoped src="./reviews.pcss"></style>