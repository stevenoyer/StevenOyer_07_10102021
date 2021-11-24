<template>
    <header class="header">
        <nav id="nav" class="navbar navbar-expand-lg header-nav navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="../assets/icon.svg" alt="" width="60" >
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-if="connected">
                            <router-link class="nav-link btn btn-info me-3" aria-current="page" to="/profile">Mon profil</router-link>
                        </li>
                        <li class="nav-item" v-if="connected">
                            <a class="nav-link btn btn-danger" @click="disconnect()">Se déconnecter</a>
                        </li>
                        <li>
                            <router-link class="nav-link btn btn-info me-3" aria-current="page" to="/profil">Mon profil</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </header>
</template>

<style scoped>
    .nav-link {
        color: #fff !important;
    }
</style>

<script>
export default {
    name: 'Header',
    data() {
        return {
            connected: false
        }
    },
    computed: {

    },
    methods: {
        disconnect() {
            //this.$store.dispatch('disconnect')
            localStorage.removeItem('user')
            location.href = '/'
            this.connected = false
        }
    }
}
</script>