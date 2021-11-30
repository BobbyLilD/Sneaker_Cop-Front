<template>
    <div id="nav">
        <router-link class="nav-link">
            <button class="nav-btn">Feed</button>
        </router-link>

        <router-link class="nav-link">
            <button class="nav-btn">Requests</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
    #nav{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 16px 0px;
    }
    .nav-btn{
        flex-grow: 1;
        padding: 12px 24px;
    }
</style>