import editWork from "./editWork.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onEditCancelled: action("onEditCancelled"),
  onEditCompleted: action("onEditCompleted")
};

export default {
  title: "edit work",
  components: { editWork },
  decorators: [withKnobs]
};

const defaultWork = {
  id: 3,
  title: "Third work",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: 'uploads/463q5143895117621_origin.jpg',
  link: "//bing.com",
  tags: ["Azure", "Kubernetes", "DevOps"]
};

export const defaultView = () => ({
  components: { editWork },
  props: {
    work: {
      default: object("work", defaultWork)
    }
  },
  template: `
    <edit-work :work="work" @editCancelled="onEditCancelled" @editCompleted="onEditCompleted"/>
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  work: defaultWork
};