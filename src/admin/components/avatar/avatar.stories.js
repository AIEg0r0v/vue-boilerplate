import avatar from "./avatar.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "avatar",
  components: { avatar },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { avatar },
  props: {
    size: {
      default: text("size", "3.1")
    },
    title: {
      default: text("size", "3.1")
    }
  },
  template: `
    <avatar :size="size" src="https://picsum.photos/300/300" />
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}


export const titledView = () => ({
  components: { avatar },
  props: {
    size: {
      default: text("size", "3.1")
    },
    title: {
      default: text("title", "Alexander Egorov")
    }
  },
  template: `
    <avatar :size="size" :title="title"  src="https://picsum.photos/300/300" />
  `,
});

titledView.story = {
  name: "Titled",
  title:"Alexander Egorov"
}