import category from "./category.vue";
import { object, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
export default {
  title: "category",
  component: category,
  decorators: [withKnobs]
};

const methods = {
  onSkillAdded: action("onSkillAdded"),
  onSkillDeleted: action("onSkillDeleted"),
  onSkillUpdated: action("onSkillUpdated"),
  onDeleted: action("onDeleted"),
  onUpdated: action("onUpdated")
}
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
    <category 
      :category="category" 
      @skillAdded="onSkillAdded"
      @skillDeleted="onSkillDeleted"
      @skillUpdated="onSkillUpdated"
      @deleted="onDeleted"
      @updated="onUpdated"
    />
  `,
  methods
});

defaultView.story = {
  name: "Default view",
  category: defaultCategory
};

