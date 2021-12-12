<template>
  <div class="home-page">
    <section class="item-list">
      <ItemCard 
      v-for="item in itemList"
      :key="item.id"
      v-bind:Item="item"
      />
    </section>
  </div>
</template>

<script>
import {fetchAllItems} from "@/netClient/itemService";
import {getFrontImage} from "@/netClient/imageService";
import ItemCard from "@/components/ItemCard.vue";
export default {
    name: "FeedPage",
    data: () => ({
      itemList: []
    }),
    async created() {
      await this.fetchItems();
    },
    components:{
      ItemCard
    },
    methods: {
      async fetchItems(){
        try {
          this.itemList = await fetchAllItems();
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      async getImage(id){
        try {
            const imageItem = await getFrontImage(id);
            return imageItem;
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