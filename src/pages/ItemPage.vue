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
            <h1>{{Item.name}}</h1>
            <h1>{{Item.brand}}</h1>
        </section>
    </div>
</template>

<script>
import {fetchItemByID} from "@/netClient/itemService"
export default {
    name: 'item-page',
    data: () => ({
        Item: {}
    }),
    async created(){
        await this.fillItemInfo();
    },
    methods: {
        async fillItemInfo(){
            try {
                this.Item = await fetchItemByID(this.$route.params['id'])
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