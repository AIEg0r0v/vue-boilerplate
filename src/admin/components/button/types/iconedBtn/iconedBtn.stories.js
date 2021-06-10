import iconedBtn from "../../button.vue";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";

const methods = {
  onClick: action("onClick"),
};

export default {
  title: "button/iconed",
  component: iconedBtn,
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { iconedBtn },
  props: {
    size: {
      default: text("size", "1.25")
    }
  },
  template: `
    <iconed-btn type="iconed" :size="size" @click="onClick" title="Заголовок" />
  `,
  methods,
});

defaultView.story = {
  name: "Стандартный вид",
};
