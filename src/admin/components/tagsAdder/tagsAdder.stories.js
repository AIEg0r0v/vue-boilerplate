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
    <div> 
    <pre> {{tags}} </pre>
      <tags-adder title="Add tag" v-model="tags" />
      </div>
  `
});

defaultView.story = {
  name: "Standard view",
 
};
