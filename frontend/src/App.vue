<template>
    <div>
        <Header />
        <router-link to="/login">Test</router-link>
        <router-view />
    </div>
</template>

<style scoped>

</style>

<script>
    import Header from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            Header
        } 
    }
</script>