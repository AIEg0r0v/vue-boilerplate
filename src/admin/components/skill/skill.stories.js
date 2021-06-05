import skill from "./skill.vue";
import { object, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "skill",
  components: { skill },
  decorators: [withKnobs]
};
const defaultSkill = {
  name: "Azure",
  value: 57,
  id: 1
};

export const defaultView = () => ({
  components: { skill },
  props: {
    skill: {
      default: object("skill", defaultSkill)
    }
  },
  template: `
    <skill :skill="skill" />
  `,
});

defaultView.story = {
  name: "Default view",
  skill: defaultSkill
};
