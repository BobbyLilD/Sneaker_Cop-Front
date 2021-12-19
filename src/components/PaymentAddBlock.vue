<template>
      <form @submit.prevent="onFormSubmit" class="payment-form">
        <button class="close-btn" @click="onCloseClick">X</button>
          <div class="form-field">
              <label for="cardNum">CARD NUMBER</label>
              <br>
              <input v-model="cardNum" type="text" id="cardNum" required>
          </div>
          <div class="form-field">
              <label for="expirationDate">EXPIRATION DATE</label>
              <br>
              <input v-model="expirationDate" type="text" id="expirationDate" required>
          </div>
          <div class="form-field">
              <label for="cvv">CVV</label>
              <br>
              <input v-model="cvv" type="text" id="cvv" required>
          </div>
          <div class="form-field">
              <label for="owner">OWNER</label>
              <br>
              <input v-model="owner" type="text" id="owner" required>
          </div>
          <div class="form-field">
              <button class="submit-btn" type="submit">SAVE</button>
          </div>
      </form>
</template>

<script>
import {createPaymentInfo} from '@/netClient/paymentService';
export default {
    name: "PaymentFormBlock",
    data: () => ({
        cardNum: '',
        cvv: '',
        expirationDate: '',
        owner: '',
    }),
    methods: {
        async onFormSubmit(){
            try {
                await createPaymentInfo(this.cardNum,this.cvv,this.expirationDate,this.owner);
                this.$emit('paymentInfoCreated', {})
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        onCloseClick(){
            try {
                this.$emit('closeBlock', {})
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
}
</script>

<style>

</style>