import user from "./user.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "user",
  components: { user },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { user },
  props: {
    picture: {
      default: text("picture", require("../../../images/content/alex.jpg").default )
    },
    username: {
      default: text("name", "Alexander Egorov")
    }
  },
  template: `
    <user :name="username" :picture="picture" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
  username: "Alexander Egorov",
  picture: require("../../../images/content/alex.jpg").default
}
