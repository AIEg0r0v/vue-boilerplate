<template lang="pug">
  .skill-addline-component
    app-input(
      v-model="currentSkill.name" 
      noSidePaddings 
    ).name 
    app-input(
      v-model="currentSkill.value" 
      noSidePaddings
      type="number"
      min="0"
      max="100"
      maxlength="3" 
    ).value.value-input
    iconed-btn(
      type="iconed"
      @click="onAdd"
      title=""
      size="2.5"
    ).btn
</template>


<script>
import iconedBtn from "../button";
import input from "../input";

export default {
  components: { 
    iconedBtn, 
    appInput: input
  },
  data() {
    return {
      currentSkill: {
        id: 0,
        name: "New Skill",
        value: 100
      }
    }
  },
  computed: {

  },
  methods: {
    onAdd(){
      this.$emit('added', {...this.currentSkill});
      this.currentSkill.id = 0;
      this.currentSkill.name = "New Skill";
      this.currentSkill.value = 100;
    }
  }
}
</script>
<style lang="postcss" scoped src="./skillAddLine.pcss"></style>