<template lang="pug">
  .work-component
    .work__header
      img(:src="work.image").work__header-image
      .work__header-tags
        ul.tags
          li(
            v-for="tag in work.tags" 
            :key="tag"
          ).tag
            tag(:title="tag")
    .work__body
      .work__body-title {{work.title}}
      .work__body-description {{work.description}}
      .work__body-link {{work.link}}
    .work-footer
      icon( 
        title="Edit"
        symbol="pencil"
        @click="requestEdit"
      ).work__footer-button
      icon( 
        title="Delete"
        symbol="cross"
        @click="deleteWork"
      ).work__footer-button
      

</template>


<script>
import icon from "../icon";
import tag from "../tag";
export default {
  components: { 
    icon, 
    tag
  },
  data() {
    return {
      editMode: false
    }
  },
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {

  },
  methods: {
    requestEdit(){
      this.$emit('editRequested', this.work.id);
    },
    deleteWork(){
      this.$emit('deleted', this.work.id);
    }
  }
}
</script>
<style lang="postcss" scoped src="./work.pcss"></style>