<template>
  <div class="registration-page">
    <form @submit.prevent="onFormSubmit" class="registration-form">
      <div class="form-field">
        <label for="login">NAME</label>
        <br />
        <input v-model="name" type="text" id="login" required />
      </div>
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
          <span>Have an account? </span>
          <a @click="redirect" class="link-btn">Login</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {doRegister} from "@/netClient/authService"

export default {
  name: "registration-page",
  data: () => ({
    email: "",
    name: "",
    password: "",
  }),
  methods: {
    redirect() {
      this.$router.push("/login");
    },
        async onFormSubmit() {
        try {
            const data = await doRegister(
                this.name.trim(), 
                this.password.trim(), 
                this.email.trim()
                );
                console.warn({data});
        } catch (error) {
            console.error({error});
        }
        this.$router.push('/login')
    }
  },
};
</script>

<style></style>
