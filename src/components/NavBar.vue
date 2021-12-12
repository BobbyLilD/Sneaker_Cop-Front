<template>
  <div id="nav">
    <router-link to="/" class="nav-link">
      <button class="nav-btn">FEED</button>
    </router-link>

    <router-link to="/" class="nav-link">
      <button class="nav-btn">WISHLIST</button>
    </router-link>

<<<<<<< HEAD
    <router-link to="/" class="nav-link">
      <button class="nav-btn">REQUESTS</button>
    </router-link>

    <div class="nav-link">
      <button @click="onLogoutClicked" class="nav-btn">LOGOUT</button>
=======
        <router-link class="nav-link">
            <button class="nav-btn">
                REQUESTS
            </button>
        </router-link>

        <router-link class="nav-link">
            <button class="nav-btn">
                OPTIONS
            </button>
        </router-link>
>>>>>>> a57c9d27a8fbd25f26d0eaf748333cda7aa164e9
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

<<<<<<< HEAD
<style></style>
=======
<style>
@import '../assets/index.css';
</style>
>>>>>>> a57c9d27a8fbd25f26d0eaf748333cda7aa164e9
