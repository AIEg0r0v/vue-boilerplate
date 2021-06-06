import skillAddLine from "./skillAddLine.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onAdd: action("onAdd"),
};

export default {
  title: "skillAddLine",
  components: { skillAddLine }
};

export const defaultView = () => ({
  components: { skillAddLine },
  template: `
    <skillAddLine @skillAdded="onAdd" />
  `,
  methods
});

defaultView.story = {
  name: "Default view",
};
