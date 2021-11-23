<template>
    <div>
        <Header />
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