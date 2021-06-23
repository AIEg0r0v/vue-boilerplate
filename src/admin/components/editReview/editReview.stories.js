import editReview from "./editReview.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onEditCancelled: action("onEditCancelled"),
  onEditCompleted: action("onEditCompleted")
};

export default {
  title: "edit review",
  components: { editReview },
  decorators: [withKnobs]
};

const defaultReview = {
  id: 3,
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  reviewer: {
    name: 'Cicero', 
    title: 'Consul of Rome', 
    avatar: '', 
    preview: '' 
  }
};

export const defaultView = () => ({
  components: { editReview },
  props: {
    review: {
      default: object("review", defaultReview)
    }
  },
  template: `
    <edit-review :review="review" @editCancelled="onEditCancelled" @editCompleted="onEditCompleted"/>
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  work: defaultReview
};