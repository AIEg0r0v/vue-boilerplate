import skill from "./skill.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onApprove: action("onApprove"),
  onRemove: action("onRemove")
};

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
    <skill @changed="onApprove" @deleted="onRemove" :skill="skill" />
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  skill: defaultSkill
};
