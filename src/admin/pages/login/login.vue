<template lang="pug">
  .container
    .header
      .login__form
        app-input(title="Username" icon="user" v-model="user.name").login__form-username
        app-input(title="Password" icon="key" type="password" v-model="user.password").login__form-password
        iconed-btn(title="login" @click="onFormSubmit").login__form-submitBtn
</template>

<script>
import appInput from "../../components/input/input.vue";
import iconedBtn from '../../components/button/button.vue'
import { mapState, mapMutations } from "vuex";

export default {
  components:{
    appInput, iconedBtn
  },
  data() {
      return {
        user: {
          name: "dar10052021",
          password: ""
        }
      }
  },
  computed: {
    ...mapState({
      loggedIn: state => state.login.token !== "" && state.login.expiresAt > Date.now,
      token: state => state.login.token,
      expiresAt: state => state.login.expiresAt,
      userId: state => state.login.userId
      })
  },
  methods: {
    ...mapMutations(['login']),

    onFormSubmit(){
      this.login(this.user);
    }
  }
  
}
</script>
<style lang="postcss" scoped src="./login.pcss"></style>