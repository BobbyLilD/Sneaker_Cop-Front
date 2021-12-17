<template>
    <div class="item-page">
        <section class="image-section">
            <img 
            v-for="image in Item.imageLinks"
            :key="image.location"
            :src="require('@/assets/images/' + image.location)" 
            alt="product-image"
            class="product-image">
        </section>
        <section class="info-section">
            <h1 class="top-info">{{Item.name}}</h1>
            <h1 class="top-info">{{Item.brand}}</h1>
            <OfferSelector class="offer-selector" v-bind:Offers="Item.offers"/>
            <button @click="onWishClick" class="wishlist-btn">{{this.wished.value}}</button>
        </section>
    </div>
</template>

<script>
import OfferSelector from "@/components/OfferSelector.vue"
import {fetchItemByID} from "@/netClient/itemService"
import {createWish, deleteWish} from "@/netClient/wishService"
export default {
    name: 'item-page',
    data: () => ({
        Item: {},
        wished: {
            value: ""
        }
    }),
    async created(){
        await this.fillItemInfo();
        if(this.Item.wish == false){
            this.wished.value = "ADD TO WISHLIST";
        } else{
            this.wished.value = "DELETE FROM WISHLIST";
        }
    },
    methods: {
        async fillItemInfo(){
            try {
                this.Item = await fetchItemByID(this.$route.params['id'])
            } catch (error) {
                console.error(error);
                throw error;
            }
        }, async onWishClick(){
            try {
                if(this.Item.wish == false){
                    await createWish(this.Item.id);
                    this.Item.wish = true;
                    this.wished.value = "DELETE FROM WISHLIST";
                } else{
                    this.Item.wish = false;
                    await deleteWish(this.Item.id);
                    this.wished.value = "ADD TO WISHLIST";
                }
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
    components: {
        OfferSelector
    }
}
</script>

<style>

</style>