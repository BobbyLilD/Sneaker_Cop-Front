<template>
  <div class="main-layout">
    <div class="dropdown">
      <div class="dropdown-top">
        <img alt="Logo" src="@/assets/logo.png" />
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
import NavBar from "@/components/NavBar.vue"
export default {
    name: 'main-layout',
    components: {
        NavBar
    }
};
</script>

<style></style>
