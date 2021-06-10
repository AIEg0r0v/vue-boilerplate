import navigation from "./navigation.vue";
import { object, withKnobs } from "@storybook/addon-knobs";

const defaultTabs = [
  {id: 0, title: "About", alias: "?path=/story/navigation--default-view", active: false},
  {id: 1, title: "Works", alias: "?path=/story/navigation--default-view", active: true},
  {id: 2, title: "Reviews", alias: "?path=/story/navigation--default-view", active: false},
  {id: 3, title: "Skills", alias: "?path=/story/navigation--default-view", active: false},
];

export default {
  title: "navigation",
  components: { navigation },
  decorators: [withKnobs]
};


  
export const defaultView = () => ({
  components: { navigation },
  props: {
    tabs: {
      default: object("tabs", defaultTabs)
    }
  },
  template: `
    <navigation  :tabs="tabs"/>
  `,
});

defaultView.story = {
  name: "Стандартный вид",
  tabs: defaultTabs 
}