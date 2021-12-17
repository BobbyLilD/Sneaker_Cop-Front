<template>
  <section class="about-info">
    <div class="info-top">
      <div class="info-title">ADRESSES</div>
      <button class="info-edit-btn">ADD</button>
    </div>
    <div class="info-block">
      <div class="about-info-line">
        <span class="about-info-line-title">NAME: </span>
        <span class="about-info-line-text">{{ User.name }}</span>
      </div>
      <div class="about-info-line">
        <span class="about-info-line-title">EMAIL: </span>
        <span class="about-info-line-text">{{ User.email }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "AddressBlock",
    props: {
        User: Object
    }
};
</script>

<style></style>
