<template>
  <section class="about-info">
    <div class="info-top">
      <div class="info-title">ADRESSES</div>
      <button class="info-edit-btn" @click="onAddClick">ADD</button>
    </div>
    <AddressInfoBlock 
    v-for="address in User.addresses"
    :key="address.id"
    v-bind:Address="address"
    @addressDeleted="onDeleteAddress"
    />
    <AddressAddBlock 
    v-if="add" 
    @closeBlock="onClose"
    @addressCreated="onCreateAddress"/>
  </section>
</template>

<script>
import AddressAddBlock from "@/components/AddressAddBlock.vue";
import AddressInfoBlock from "@/components/AddressInfoBlock.vue";
export default {
    name: "AddressBlock",
    data: () => ({
      add: false
    }),
    props: {
        User: Object
    },
    components: {
      AddressAddBlock,
      AddressInfoBlock
    },
    methods: {
      onAddClick(){
        this.add = true;
      },
      onClose(){
        this.add = false;
      },
      onCreateAddress(){
        this.add = false;
        this.$emit("addressCreated", {});
      },
      onDeleteAddress(){
        this.$emit('addressDeleted', {});
      }
    }
};
</script>

<style></style>
