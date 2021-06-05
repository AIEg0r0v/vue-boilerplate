import skill from "./skill.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "skill",
  components: { skill },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { skill },
  props: {
    picture: {
      default: text("picture", require("../../../images/content/alex.jpg").default )
    },
    username: {
      default: text("name", "Alexander Egorov")
    }
  },
  template: `
    <skill :name="username" :picture="picture" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
  username: "Alexander Egorov",
  picture: require("../../../images/content/alex.jpg").default
}
