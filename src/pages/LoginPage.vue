<template>
  <div class="login-page">
    <form @submit.prevent="onFormSubmit" class="login-form">
      <div class="form-field">
        <label for="login">EMAIL</label>
        <br />
        <input v-model="email" type="text" id="login" required />
      </div>
      <div class="form-field">
        <label for="password">PASSWORD</label>
        <br />
        <input v-model="password" type="text" id="password" required />
      </div>

      <div class="form-field">
        <button class="submit-btn" type="submit">SUBMIT</button>
        <div class="action-link">
          <span>No account? </span>
          <a @click="redirect" class="link-btn">Register</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {doLogin} from "@/netClient/authService";

export default {
  name: "login-page",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    redirect() {
      this.$router.push("/registration");
    },
    async onFormSubmit() {
    try {
        const token = await doLogin(
            this.email.trim(), 
            this.password.trim()
            );
        if (token){
            this.$router.push('/');
        }
    } catch (error) {
        console.error({error});
    }
}
  },
};
</script>

<style></style>
