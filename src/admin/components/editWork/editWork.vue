<template lang="pug">
  form.form(@submit.prevent="handleSubmit")
    card(title="Edit work").edit__work
      template(slot="content")
        .edit__work-content-container
          .image__upload-container(
            :style="{backgroundImage: `url(${cover})`}"
            :class="[{'image__upload-container--hovered': hovered}]"
            @dragover="handleDragOver"
            @dragleave="hovered = false"
            @drop="handleFileUpload"
          )
            .image__upload-description(
              :class="[{'image__upload-description--active': work.preview}]"
            ) Drag image here or press UPLOAD button to upload image
            defaultBtn(
              title="UPLOAD" 
              typeAttr="file"
              @change="handleFileUpload"
            ).image__upload-button
          .edit__work-container
            app-input(
              title="Name"
              v-model.trim="work.title"
            ).edit__work-input.edit__work-title
            app-input(
              title="Link"
              v-model.trim="work.link"
            ).edit__work-input.edit__work-link
            app-input(
              title="Description"
              fieldType="textarea"
              v-model.trim="work.description"
            ).edit__work-input.edit__work-description
            tags-adder(
              title="Add tag" 
              v-model="work.tags"
            ).edit__work-input
            .edit__work-buttons
              defaultBtn(title="Cancel" plain @click.prevent="onWorkUpdateCanceled").edit__work-cancelbtn
              defaultBtn(title="SAVE"  typeAttr="submit").edit__work-savebtn     
</template>


<script>
import card from '../../components/card/card.vue'
import tagsAdder from '../../components/tagsAdder/tagsAdder.vue'
import appInput from "../../components/input/input.vue"
import defaultBtn from "../../components/button/types/defaultBtn/defaultBtn.vue";
import squareBtn from "../../components/button/button.vue"; 

const serverUrl = 'https://webdev-api.loftschool.com'
export default {
  components: {
    squareBtn, defaultBtn, card, tagsAdder, appInput
  },
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  computed: {
    cover() {
      return this.isWorkPreviewSet ? this.work.preview : `${serverUrl}/${this.work.image}`;
    },
    isWorkPreviewSet(){
      return 'preview' in this.work && this.work.preview && this.work.preview.length !== 0;
    }
  },
  methods: {
    handleDragOver(event){
      event.preventDefault();
      console.log("drag over");
      this.hovered = true;
    },
    handleFileUpload(event){
      event.preventDefault();
      const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      this.work.image = file;
      this.renderImage(this.work.image);
      this.hovered = false;
    },
    renderImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.work.preview = reader.result;
      };

      reader.onerror = () => {
        console.log("error while reading file")
      };

      reader.onabort = () => {
        console.log("aborting file read")
      };
    },
    onWorkUpdateCanceled(){
      this.$emit("editCancelled");
    },
    async handleSubmit(){
      this.$emit("editCompleted", this.work);
    }
  }
}
</script>
<style lang="postcss" scoped src="./editWork.pcss"></style>