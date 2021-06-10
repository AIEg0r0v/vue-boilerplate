import headline from "./headline.vue";

export default {
  title: "headline",
  component: headline,
};

export const defaultView = () => ({
  components: { headline },
  template: `
    <headline />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const labeledView = () => ({
  components: { headline },
  template: `
    <headline title="Custom Title" >
      <h3 style="color: #FFF">Content</h3>
    </headline>
  `,
});

labeledView.story = {
  name: "С контентом",
};


