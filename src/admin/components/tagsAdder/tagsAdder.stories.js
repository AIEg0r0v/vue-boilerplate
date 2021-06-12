import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: {tagsAdder}
}

export const defaultView = () => ({
  components: { tagsAdder },
  data() {
    return {
      tags: ["one", "two", "three"]
    }
  },
  template: `
      <tags-adder title="Add tag" v-model="tags" />
  `
});

defaultView.story = {
  name: "Standard view",
 
};
