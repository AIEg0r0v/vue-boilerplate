import category from "./category.vue";
import { object, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "category",
  component: category,
  decorators: [withKnobs]
};

const defaultSkills = [
  {id: 0, name: "Not so good skill", value: 25},
  {id: 1, name: "Skill I am good at", value: 77}
];

const defaultCategory = {
  id: 0,
  name: "Skills category",
  skills: defaultSkills
};

export const defaultView = () => ({
  components: { category },
  props: {
    category: {
      	default: object("category", defaultCategory)
    }
  },
  template: `
    <category :category="category"/>
  `,
});

defaultView.story = {
  name: "Default view",
  category: defaultCategory
};

