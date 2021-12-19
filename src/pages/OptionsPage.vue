<template>
  <div class="options-page">
    <section class="about-info">
      <div class="info-top">
          <div class="info-title">
              INFO
          </div>
          <button class="info-edit-btn" @click="onEditClick">
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
      <BasicInfoEdit 
      v-if="edit"
      @userUpdated="userUpdated"
      @CloseBlock="onEditClose"
      v-bind:userInfo="this.User"
      />
    </section>
    <AddressBlock v-bind:User="User" @addressCreated="getUser" @addressDeleted="getUser"/>
    <PaymentBlock v-bind:User="User" @paymentInfoCreated="getUser" @paymentInfoDeleted="getUser"/>

  </div>
</template>

<script>
import { getUserInfo } from "@/netClient/userService";
import AddressBlock from "@/components/AddressBlock.vue";
import PaymentBlock from "@/components/PaymentBlock.vue";
import BasicInfoEdit from '@/components/BasicInfoEdit.vue';
export default {
  name: "OptionsPage",
  data: () => ({
    User: {},
    edit: false
  }),
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      this.User = await getUserInfo();
    },
    onEditClick(){
      this.edit = true
    },
    onEditClose(){
      this.edit = false
    },
    async userUpdated(){
      this.edit = false;
      this.User = await getUserInfo();
    }
  },
  components: {
      AddressBlock,
      PaymentBlock,
      BasicInfoEdit
  }
};
</script>

<style></style>
