<template>
  <div class="options-page">
    <section class="about-info">
      <div class="info-top">
          <div class="info-title">
              INFO
          </div>
          <button class="info-edit-btn">
              EDIT
          </button>
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
    <AddressBlock v-bind:User="User"/>
    <PaymentBlock v-bind:User="User"/>

  </div>
</template>

<script>
import { getUserInfo } from "@/netClient/userService";
import AddressBlock from "@/components/AddressBlock.vue";
import PaymentBlock from "@/components/PaymentBlock.vue";
export default {
  name: "OptionsPage",
  data: () => ({
    User: {},
  }),
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      this.User = await getUserInfo();
    },
  },
  components: {
      AddressBlock,
      PaymentBlock
  }
};
</script>

<style></style>
