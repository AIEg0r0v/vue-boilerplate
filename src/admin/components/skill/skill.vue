<template lang="pug">
  .skill-component(v-if="editMode")
    .title
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
      ).value.value-input %
    .buttons
      icon(
        symbol="tick" 
        @click="acceptChange"
      ).btn
      icon(
        symbol="cross"
        @click="rejectChange"
      ).btn
  .skill-component(v-else)
    .title
      .name {{currentSkill.name}}
      .value {{currentSkill.value}} %
    .buttons
      icon(
        symbol="pencil" 
        grayscale 
        @click="editMode = true"
      ).btn
      icon(
        symbol="trash" 
        grayscale 
        @click="deleteSkill"
      ).btn
</template>


<script>
import icon from "../icon";
import input from "../input";

export default {
  components: { 
    icon, 
    appInput: input
  },
  data() {
    return {
      editMode: false,
      currentSkill: {
        id: this.skill.id,
        name: this.skill.name,
        value: this.skill.value
      }
    }
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {

  },
  methods: {
    acceptChange(){
      this.$emit('skillChanged', this.currentSkill);
    },
    rejectChange(){
      this.editMode = false;
      this.currentSkill = {...this.skill}
    },
    deleteSkill(){
      this.$emit('skillDeleted', this.skill.id);
    }
  }
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>