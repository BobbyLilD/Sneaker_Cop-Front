<template>
  <div class="item-card" @click="onLinkClick">
    <button class='item-link'>
    <div class="item-image">
      <img
        :src="require('@/assets/images/' + Item.imageLink)"
        alt="Item image"
      />
    </div>
    </button>
    <div class="item-title">
      {{ Item.name }}
    </div>
    <div class="item-brand">
      {{ Item.brand }}
    </div>
  </div>
</template>

<script>
export default {
  name: "itemCard",
  props: {
    Item: Object,
  },
  methods: {
    onLinkClick() {
      this.$router.push({name: 'item-page', params: {id: this.Item.id}})
    }
  },
};
</script>

<style></style>
