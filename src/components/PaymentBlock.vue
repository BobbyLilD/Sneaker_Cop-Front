<template>
  <section class="about-info">
    <div class="info-top">
      <div class="info-title">PAYMENT INFO</div>
      <button class="info-edit-btn" @click="onAddClick">ADD</button>
    </div>
    <PaymentInfoBlock
    v-for="paymentInfo in User.paymentInfos"
    :key="paymentInfo.id"
    v-bind:Payment="paymentInfo"
    @paymentInfoDeleted="onDeletePaymentInfo"/>
    <PaymentAddBlock 
    v-if="add" 
    @closeBlock="onClose"
    @paymentInfoCreated="onCreatePaymentInfo"/>
  </section>
</template>

<script>
import PaymentAddBlock from '@/components/PaymentAddBlock.vue';
import PaymentInfoBlock from '@/components/PaymentInfoBlock.vue';
export default {
  name: "PaymentBlock",
  data: () => ({
      add: false
    }),
  props: {
    User: Object,
  },
  components: {
    PaymentAddBlock,
    PaymentInfoBlock
  },
  methods: {
      onAddClick(){
        this.add = true;
      },
      onClose(){
        this.add = false;
      },
      onCreatePaymentInfo(){
        this.add = false;
        this.$emit("paymentInfoCreated", {});
      },
      onDeletePaymentInfo(){
        this.$emit('paymentInfoDeleted', {});
      }
    }
};
</script>

<style></style>
