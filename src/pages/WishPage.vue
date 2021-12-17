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
import { fetchItemsByWishlist} from "@/netClient/itemService";
import ItemCard from "@/components/ItemCard.vue";
export default {
    name: "WishPage",
    data: () => ({
      itemList: []
    }),
    async created() {
        await this.fetchWishedItems();
    },
    components:{
      ItemCard
    },
    methods: {
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