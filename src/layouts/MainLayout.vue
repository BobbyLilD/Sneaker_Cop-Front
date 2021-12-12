<template>
  <div class="main-layout">
    <div class="dropdown">
      <div class="dropdown-top">
<<<<<<< HEAD
        <img alt="Logo" src="@/assets/logo.png" />
=======
        <img alt="Logo" src="./assets/logo.png" />
>>>>>>> a57c9d27a8fbd25f26d0eaf748333cda7aa164e9
      </div>
      <div class="dropdown-content">
        <NavBar />
      </div>
    </div>
    <div class="page-container">
        <router-view/>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import NavBar from "@/components/NavBar.vue"
export default {
    name: 'main-layout',
    components: {
        NavBar
    }
=======
import NavBar from "@/components/NavBar.vue";
export default {
  name: "main-layout",
  components: {
    NavBar,
  },
>>>>>>> a57c9d27a8fbd25f26d0eaf748333cda7aa164e9
};
</script>

<style></style>
