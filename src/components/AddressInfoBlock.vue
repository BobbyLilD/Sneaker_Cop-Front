<template>
    <div class="info-block">
        <button class="delete-info-btn" @click="onDeleteClick">X</button>
      <div class="about-info-line">
        <span class="about-info-line-title">COUNTRY: </span>
        <span class="about-info-line-text">{{ Address.country }}</span>
      </div>
      <div class="about-info-line">
        <span class="about-info-line-title">CITY: </span>
        <span class="about-info-line-text">{{ Address.city }}</span>
      </div>
      <div class="about-info-line">
        <span class="about-info-line-title">STREET: </span>
        <span class="about-info-line-text">{{ Address.street }}</span>
      </div>
      <div class="about-info-line">
        <span class="about-info-line-title">BUILDING: </span>
        <span class="about-info-line-text">{{ Address.building }}</span>
      </div>
      <div class="about-info-line">
        <span class="about-info-line-title">APARTMENT: </span>
        <span class="about-info-line-text">{{ Address.apartment }}</span>
      </div>
    </div>
</template>

<script>
import {deleteAddress} from '@/netClient/addressService';
export default {
    name: "AddressInfoBlock",
    props: {
        Address: Object
    },
    methods: {
        async onDeleteClick(){
            await deleteAddress(this.Address.id);
            this.$emit('addressDeleted', {});
        }
    }
}
</script>

<style>

</style>