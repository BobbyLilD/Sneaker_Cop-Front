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
import {fetchAllItems, fetchItemsByWishlist} from "@/netClient/itemService";
import ItemCard from "@/components/ItemCard.vue";
export default {
    name: "FeedPage",
    data: () => ({
      itemList: []
    }),
    async created() {
      if(this.$route.path == "/"){
        await this.fetchItems();
      } else {
        await this.fetchWishedItems();
      }
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
      async fetchWishedItems(){
        try {
          this.itemList = await fetchItemsByWishlist();
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