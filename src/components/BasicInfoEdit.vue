<template>
  <form class="info-edit" @submit.prevent="onFormSubmit">
    <button class="close-btn" @click="onCloseClick">X</button>
    <div class="form-field">
      <label for="name">NAME</label>
      <br />
      <input v-model="userName" type="text" id="name" required />
    </div>
    <div class="form-field">
      <label for="email">EMAIL</label>
      <br />
      <input v-model="email" type="text" id="email" required />
    </div>
    <div class="form-field">
      <label for="password">PASSWORD</label>
      <br />
      <input v-model="password" type="text" id="password" required />
    </div>
    <div class="form-field">
      <button class="submit-btn" type="submit">SAVE</button>
    </div>
  </form>
</template>

<script>
import { updateUserInfo } from "@/netClient/userService";
export default {
  name: "BasicInfoEdit",
  data: () => ({
    userName: "",
    email: "",
    password: "",
  }),
  props: {
    userInfo: Object,
  },
  mounted() {
    this.userName = this.userInfo.name;
    this.email = this.userInfo.email;
    this.password = this.userInfo.password;
  },
  methods: {
    async onFormSubmit() {
      try {
        await updateUserInfo(this.userName, this.email, this.password);
        this.$emit("userUpdated", {});
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onCloseClick() {
      try {
        this.$emit("closeBlock", {});
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
</script>

<style></style>
