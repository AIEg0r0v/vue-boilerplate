import review from "./review.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onEditRequest: action("onEditRequest")
};

export default {
  title: "review",
  components: { review },
  decorators: [withKnobs]
};

const defaultReview = {
  id: 3,
  reviewer: {
    name: "Augustus",
    title: "Emperor of Rome",
    avatar: 'uploads/463q5143895117621_origin.jpg'
  },
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const defaultView = () => ({
  components: { review },
  props: {
    review: {
      default: object("review", defaultReview)
    }
  },
  template: `
    <review :review="review"  @deleted="onRemove" @editRequested="onEditRequest" />
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  review: defaultReview
};


export const disabledView = () => ({
  components: { review },
  props: {
    review: {
      default: object("review", defaultReview)
    }
  },
  template: `
    <review :review="review" disabled="true" @deleted="onRemove" @editRequested="onEditRequest" />
  `,
  methods
});

disabledView.story = {
  name: "Disabled view",
  review: defaultReview
};