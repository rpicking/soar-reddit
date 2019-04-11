<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: "App",
    components: {Navbar}
};

</script>



<style>
body {
    background: #899db2;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
