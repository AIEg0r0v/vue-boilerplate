import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: {tagsAdder}
}

export const defaultView = () => ({
  components: { tagsAdder },
  data() {
    return {

    }
  },
  template: `
    <tags-adder title="Add tag" />
  `
});

defaultView.story = {
  name: "Standard view",
 
};
