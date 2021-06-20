<template lang="pug">
  card(:class="{'review-component--disabled': disabled}")
    template(slot="title")
      .review__user
        .review__user__avatar
          .review__user__avatar-style
              img(:src="cover").review__user__pic
        .review__user__data
          .review__user__name {{review.reviewer.name}}
          .review__user__title {{review.reviewer.title}}
    template(slot="content")
      .review__body
        .review__text
          p {{review.text}}
      .review-footer
        icon( 
          title="Edit"
          symbol="pencil"
          @click="requestEdit"
        ).review__footer-button
        icon( 
          title="Delete"
          symbol="cross"
          @click="deletereview"
        ).review__footer-button
      

</template>


<script>
import icon from "../icon";
import card from "../card";
const serverUrl = 'https://webdev-api.loftschool.com'
export default {
  components: { 
    icon, 
    card
  },
  props: {
    review: {
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
    cover() {
      return `${serverUrl}/${this.review.reviewer.avatar}`;
    }
  },
  methods: {
    requestEdit(){
      this.$emit('editRequested', this.review);
    },
    deletereview(){
      this.$emit('deleted', this.review.id);
    }
  }
}
</script>
<style lang="postcss" scoped src="./review.pcss"></style>