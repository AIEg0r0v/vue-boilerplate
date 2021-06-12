<template lang="pug">
  .work-component(:class="{'work-component--disabled': disabled}")
    .work__header
      img(:src="work.image").work__header-image
      ul.work__header-tags
        li(
          v-for="tag in work.tags" 
          :key="tag"
        ).work__header-tag
          tag(:title="tag")
    .work__body
      .work__body-title {{work.title}}
      .work__body-description {{work.description}}
      a(:href="work.link").work__body-link {{work.link}}
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
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {

  },
  methods: {
    requestEdit(){
      this.$emit('editRequested', this.work);
    },
    deleteWork(){
      this.$emit('deleted', this.work.id);
    }
  }
}
</script>
<style lang="postcss" scoped src="./work.pcss"></style>