<template>
    <div id="nav">
        <router-link class="nav-link">
            <button class="nav-btn">
                FEED
            </button>
        </router-link>

        <router-link class="nav-link">
            <button class="nav-btn">
                WISHLIST
            </button>
        </router-link>

        <router-link class="nav-link">
            <button class="nav-btn">
                REQUESTS
            </button>
        </router-link>

        <router-link class="nav-link">
            <button class="nav-btn">
                OPTIONS
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
@import '../assets/index.css';
</style>