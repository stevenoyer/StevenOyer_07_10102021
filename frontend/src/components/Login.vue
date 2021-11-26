<template>
    <div class="container-fluid container-md py-5">
        <div class="form-signup">
            <h2 class="text-danger text-center text-uppercase" v-if="mode == 'login'">Connexion</h2>
            <h2 class="text-danger text-center text-uppercase" v-else>Inscription</h2>

            <div class="text-center py-2">
                <p class="link" v-if="mode == 'login'"><span @click="switchCreate()">Vous n'avez pas de compte ?</span></p>
                <p class="link" v-else><span @click="switchLogin()">Vous avez déjà un compte ?</span></p>
            </div>

            <div class="row" v-if="mode == 'create'">
                <div class="col-12 col-md-6">
                    <div class="mb-3 form-row">
                        <label for="prenom" class="form-label">Prénom</label>
                        <input id="prenom" type="text" class="form-control" v-model="prenom" placeholder="John">
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="mb-3 form-row">
                        <label for="nom" class="form-label">Nom</label>
                        <input id="nom" type="text" class="form-control" v-model="nom" placeholder="Doe">
                    </div>
                </div>
            </div>
            
            <div class="mb-3 form-row">
                <label for="email" class="form-label">Adresse e-mail</label>
                <input id="email" type="email" class="form-control" v-model="email" placeholder="johne.doe@email.com">
            </div>

            <div class="mb-3 form-row">
                <label for="pass" class="form-label">Mot de passe</label>
                <input id="pass" type="password" class="form-control" v-model="pass" placeholder="***********">
            </div>

            <div class="mb-3 text-end form-row">
                <button @click="login()" class="btn btn-primary" :class="{'disabled' : !validateFields}" v-if="mode == 'login'">Se connecter</button>
                <button @click="create()" class="btn btn-primary" :class="{'disabled' : !validateFields}" v-else>S'inscrire</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    const axios = require('axios').default
    export default {
        name: 'Login',
        data: () => {
            return {
                mode: 'login',
                prenom: '',
                nom: '',
                email: '',
                pass: ''
            }
        },
        computed: {
            validateFields: function() {
                if (this.mode == 'create') {
                    if (this.prenom != "" && this.nom != "" && this.email != "" && this.pass != "") {
                        return true
                    }else {
                        return false
                    }
                }else {
                    if (this.email != "" && this.pass != "") {
                        return true
                    }else {
                        return false
                    }
                }
            },
            ...mapState(['connected'])
        },
        methods: {
            switchCreate: function() {
                this.mode = 'create'
            },
            switchLogin: function() {
                this.mode = 'login'
            },
            login: function(data) {
                let obj = {}

                if (data) {
                    obj = {
                        email: data.email,
                        pass: data.pass
                    }
                }else {
                    obj = {
                        email: this.email,
                        pass: this.pass
                    }
                }
                axios.post('http://127.0.0.1:3200/api/auth/login', obj)
                .then(response => {
                    if (response.status != 200) {
                        alert('Une erreur est survenue lors de la connexion à votre compte.')
                    }

                    if (response.data.userId) {
                        this.$store.dispatch('loginAccount', {
                            connected: true,
                            userId: response.data.userId,
                            prenom: response.data.prenom,
                            nom: response.data.nom,
                            email: response.data.email,
                            admin: response.data.admin,
                            token: response.data.token
                        })
                        this.$router.push('/')
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            create: function() {
                console.log(this.email, this.pass, this.nom, this.prenom)
                axios.post('http://127.0.0.1:3200/api/auth/signup', {
                    prenom: this.prenom,
                    nom: this.nom,
                    email: this.email,
                    pass: this.pass
                }).then(response => {
                    console.log(response)
                    if (response.status != 201) {
                        alert('Une erreur est survenue lors de la création du compte.')
                    }
                    this.login({email: this.email, pass: this.pass})
                }).catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    .form-signup {
        background: #FFD7D7;
        padding: 40px;
        width: 100%;
        margin: 0 auto;
        border-radius: .25rem;
    }

    .form-signup .link {
        cursor: pointer;
        color: #0d6efd;
        text-decoration: underline;
    }

    @media screen and (min-width: 640px) {
        .form-signup {
            width: 70%;
        }
    }
</style>