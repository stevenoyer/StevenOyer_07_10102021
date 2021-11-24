<template>
  <div class="containerfluid container-md mt-5">
    <h1 class="text-center">Bienvenue sur Groupomania</h1>
    <Login />
  </div>
</template>

<script>
  import Login from '../components/Login.vue'
  export default {
    name: 'Home',
    components: {
      Login
    }
  }
</script>