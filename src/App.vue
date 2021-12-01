<template>
  <div id="app">
    <div class="dropdown">
      <div class="dropdown-top">
      <img alt="Logo" src="./assets/logo.png" />
      </div>
      <div class="dropdown-content">
        <NavBar />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import "./style/index.css"

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style>
@import './style/index.css';
</style>
