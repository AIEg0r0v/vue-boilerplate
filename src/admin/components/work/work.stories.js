import work from "./work.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onEditRequest: action("onEditRequest")
};

export default {
  title: "Work",
  components: { work },
  decorators: [withKnobs]
};

const defaultWork = {
  id: 3,
  title: "Third work",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../../images/content/Preview-3.jpg").default,
  link: "//bing.com",
  tags: ["Azure", "Kubernetes", "DevOps"]
};

export const defaultView = () => ({
  components: { work },
  props: {
    work: {
      default: object("work", defaultWork)
    }
  },
  template: `
    <work :work="work"  @deleted="onRemove" @editRequested="onEditRequest" />
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  work: defaultWork
};
