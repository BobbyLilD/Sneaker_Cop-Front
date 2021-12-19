<template>
    <div class="info-block">
        <button class="delete-info-btn" @click="onDeleteClick">X</button>
      <div class="about-info-line">
        <span class="about-info-line-title">CARD NUMBER: </span>
        <span class="about-info-line-text">{{ Payment.cardNum }}</span>
      </div>
    </div>
</template>

<script>
import {deletePaymentInfo} from '@/netClient/paymentService';
export default {
    name: "PaymentInfoBlock",
    props: {
        Payment: Object
    },
    methods: {
        async onDeleteClick(){
            await deletePaymentInfo(this.Payment.id);
            this.$emit('addressDeleted', {});
        }
    }
}
</script>

<style>

</style>