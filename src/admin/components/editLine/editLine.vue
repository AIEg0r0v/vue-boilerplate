<template lang="pug">
  .edit-line-component( :class="{'blocked' : blocked}")
    .title(v-if="editmode === false")
      .text {{value}}
      icon(symbol="pencil" grayscale @click="editmode = true").button-icon
    .title(v-else)
      .input
        app-input(
          placeholder="New category name"
          :value="value"
          :errorText="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        )
      .buttons
        
        icon(symbol="tick" @click="onApprove").button-icon
        icon( symbol="cross" @click="$emit('remove')" ).button-icon
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    errorText: {
      type: String,
      default: ""
    },
    defaultEditMode: Boolean,
    blocked: Boolean
  },
  data() {
    return {
      editmode: this.defaultEditMode,
      title: this.value
    };
  },
  methods: {
    onApprove() {
      if (this.title.trim() === this.value.trim()) {
        this.editmode = false;
      } else {
        this.$emit("approve", this.value);
      }
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>