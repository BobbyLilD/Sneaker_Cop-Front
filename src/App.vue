<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue"
import AuthLayout from "@/layouts/AuthLayout.vue"

export default {
  name: "App",
  components: {
    MainLayout,
    AuthLayout
  },
  computed: {
    layout() {
      return this.$route.meta?.layout
    }
  }
};
</script>

<style>
<<<<<<< HEAD
=======
@import './assets/index.css';
>>>>>>> a57c9d27a8fbd25f26d0eaf748333cda7aa164e9
</style>
