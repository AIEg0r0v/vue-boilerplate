<template lang="pug">
  .container
    .header
      .title Block "Login". I have no idea how to make router works for 2 modules: main and admin at the same time. Username: dar10052021 
      .login__form
        app-input(title="Username" v-model="username").login__form-username
        app-input(title="Password" type="password" v-model="password").login__form-password
        iconed-btn(title="login" @click="onFormSubmit").login__form-submitBtn
</template>

<script>
import appInput from "../../components/input/input.vue";
import iconedBtn from '../../components/button/button.vue'

export default {
  components:{
    appInput, iconedBtn
  },
  data() {
      return {
        username: "dar05102021",
        password: ""
      }
  },
  methods: {
    onFormSubmit(){

    }
  }
  
}
</script>
<style lang="postcss" scoped src="./login.pcss"></style>