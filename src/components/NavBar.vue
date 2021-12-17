<template>
  <div id="nav">
    <router-link to="/" class="nav-link">
      <button class="nav-btn">FEED</button>
    </router-link>

    <router-link to="/wishlist" class="nav-link">
      <button class="nav-btn">WISHLIST</button>
    </router-link>

    <router-link to="/" class="nav-link">
      <button class="nav-btn" id="not-done">REQUESTS</button>
    </router-link>

    <router-link to="/options" class="nav-link">
      <button class="nav-btn">OPTIONS</button>
    </router-link>

    <div class="nav-link">
      <button @click="onLogoutClicked" class="nav-btn">LOGOUT</button>
    </div>
  </div>
</template>

<script>
import{doLogout} from "@/netClient/authService"

export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
