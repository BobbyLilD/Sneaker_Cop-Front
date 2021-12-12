<template>
  <div class="auth-layout">
    <div class="dropdown-top">
      <img alt="Logo" src="@/assets/logo.png" />
    </div>
    <div class="page-container">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
    name: "auth-layout"
};
</script>

<style></style>
