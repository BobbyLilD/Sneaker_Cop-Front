<template>
      <form @submit.prevent="onFormSubmit" class="address-form">
        <button class="close-btn" @click="onCloseClick">X</button>
          <div class="form-field">
              <label for="contry">COUNTRY</label>
              <br>
              <input v-model="country" type="text" id="country" required>
          </div>
          <div class="form-field">
              <label for="city">CITY</label>
              <br>
              <input v-model="city" type="text" id="city" required>
          </div>
          <div class="form-field">
              <label for="street">STREET</label>
              <br>
              <input v-model="street" type="text" id="street" required>
          </div>
          <div class="form-field">
              <label for="building">BUILDING</label>
              <br>
              <input v-model="building" type="text" id="building" required>
          </div>
          <div class="form-field">
              <label for="apartment">APARTMENT</label>
              <br>
              <input v-model="apartment" type="text" id="apartment" required>
          </div>
          <div class="form-field">
              <button class="submit-btn" type="submit">SAVE</button>
          </div>
      </form>
</template>

<script>
import {createAddress} from '@/netClient/addressService';
export default {
    name: "AddressFormBlock",
    data: () => ({
        country: '',
        city: '',
        street: '',
        building: '',
        apartment: ''
    }),
    methods: {
        async onFormSubmit(){
            try {
                await createAddress(this.country, this.city, this.street, this.building, this.apartment);
                this.$emit('addressCreated', {})
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