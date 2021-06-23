<template lang="pug">
  form.form(@submit.prevent="handleSubmit")
    card(title="Edit Review").edit__review
      template(slot="content")
        .edit__review-content-container
          .edit__review-content-avatar
            .image__upload-container--active(
              v-if="isActive" 
              :style="{backgroundImage: `url(${cover})`}"
            )
            .image__upload-container(v-else)
            defaultBtn(
              title="Add photo" plain
              typeAttr="file"
              @change="handleFileUpload"
            ).image__upload-button
          .edit__review-container
            .edit__reviewer
              app-input(
                title="Author Name"
                v-model.trim="review.reviewer.name"
              ).edit__reviewer-input.edit__review-title
              app-input(
                title="Author Title"
                v-model.trim="review.reviewer.title"
              ).edit__reviewer-input.edit__review-link
            app-input(
              title="Review"
              fieldType="textarea"
              v-model.trim="review.text"
            ).edit__review-input.edit__review-description
            .edit__review-buttons
              defaultBtn(title="Cancel" plain @click.prevent="onReviewUpdateCanceled").edit__review-cancelbtn
              defaultBtn(title="SAVE"  typeAttr="submit").edit__review-savebtn     
</template>


<script>
import card from '../card/card.vue'
import appInput from "../input/input.vue"
import defaultBtn from "../button/types/defaultBtn/defaultBtn.vue";
import squareBtn from "../button/button.vue"; 

const serverUrl = 'https://webdev-api.loftschool.com'
export default {
  components: {
    squareBtn, defaultBtn, card, appInput
  },
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    cover() {
      return this.isReviewPreviewSet ? this.review.reviewer.preview : `${serverUrl}/${this.review.reviewer.avatar}`;
    },
    isReviewPreviewSet(){
      return 'preview' in this.review.reviewer && this.review.reviewer.preview && this.review.reviewer.preview.length !== 0;
    },
    isActive() {
      return this.isReviewPreviewSet || this.isAvatarSet;
    },
    isAvatarSet(){
      return 'avatar' in this.review.reviewer && this.review.reviewer.avatar && this.review.reviewer.avatar.length !== 0;
 
    }
  },
  methods: {
    handleFileUpload(event){
      event.preventDefault();
      const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      this.review.reviewer.avatar = file;
      this.renderImage(this.review.reviewer.avatar);
      this.hovered = false;
    },
    renderImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.review.reviewer.preview = reader.result;
        
      };

      reader.onerror = () => {
        console.log("error while reading file")
      };

      reader.onabort = () => {
        console.log("aborting file read")
      };
    },
    onReviewUpdateCanceled(){
      this.$emit("editCancelled");
    },
    async handleSubmit(){
      this.$emit("editCompleted", this.review);
    }
  }
}
</script>
<style lang="postcss" scoped src="./editReview.pcss"></style>