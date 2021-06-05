import category from "./category.vue";

export default {
  title: "category",
  component: category,
};

export const defaultView = () => ({
  components: { category },
  template: `
    <category />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

