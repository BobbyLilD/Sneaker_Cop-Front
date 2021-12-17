<template>
  <div>
    <div class="selector-dropdown">
      <h1 class="selector-dropdown-top">{{ this.top }}</h1>
      <div class="selector-dropdown-content">
        <button @click="onStoreClick(offer)" class="store-name" v-for="offer in Offers" :key="offer.id">
          {{ offer.store }}
        </button>
      </div>
    </div>

    <div v-if="offerSelected" class="size-sheet">
    <div
        class="size-tile"
        v-for="size in selectedOffer.availableSizes"
        :key="size"
    ><p>{{size}} (US)</p></div>
    <button @click="onLinkClick" class="store-link"> TO WEBSITE</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    top: "Select a store",
    selectedOffer: {},
    offerSelected: false,
  }),
  name: "offer-selector",
  props: {
    Offers: [],
  },
  methods:{
      onStoreClick(offer){
          this.offerSelected = true;
          this.selectedOffer = offer;
          this.top = offer.store;
      },
      onLinkClick(){
          window.open(this.selectedOffer.link, '_blank');
      }
  }
};
</script>

<style></style>
