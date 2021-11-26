<template>
  <div class="containerfluid container-md mt-5">
    <div v-show="!connected" id="login">
      <h1 class="text-center">Bienvenue sur Groupomania</h1>
      <Login />
    </div>

    <div id="posts">
      <Posts />
    </div>
  </div>
</template>

<script>

  import Login from '../components/Login.vue'
  import { mapState } from 'vuex'
  import Posts from '../components/Posts.vue'

  export default {
    name: 'Home',
    components: {
      Login,
      Posts
    },
    computed: {
      ...mapState(['connected', 'token'])
    }
  }
</script>