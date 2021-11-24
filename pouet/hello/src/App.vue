<template>
    <div>
      <Header />
    </div>
  <router-view/>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            Header
        } 
    }
</script>
