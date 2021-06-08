import tag from "./tag.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "tag",
  components: {tag}
}
const methods = {
  onDelete: action("onDelete"),
};

export const defaultView = () => ({
  components: { tag},
  template: `
    <tag title="tag" />
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};

export const tagwithCrossView = () => ({
  components: { tag },
  template: `
    <tag title="tag" cross @deleted="onDelete" />
  `,
  methods
});

tagwithCrossView.story = {
  name: "Tag with cross",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};
