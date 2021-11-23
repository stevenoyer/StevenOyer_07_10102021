<template>
    <div class="container-fluid container-md py-5">
        <form class="form-signup">

            <h1 class="text-danger text-center text-uppercase" v-if="mode == 'login'">Connexion</h1>
            <h1 class="text-danger text-center text-uppercase" v-else>Inscription</h1>

            <div class="text-center py-2">
                <p class="link" v-if="mode == 'login'"><span @click="switchCreate()">Vous n'avez pas de compte ?</span></p>
                <p class="link" v-else><span @click="switchLogin()">Vous avez déjà un compte ?</span></p>
            </div>

            <div class="row" v-if="mode == 'create'">
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="prenom" class="form-label">Prénom</label>
                        <input id="prenom" type="text" name="prenom" class="form-control" placeholder="John">
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="nom" class="form-label">Nom</label>
                        <input id="nom" type="text" name="nom" class="form-control" placeholder="Doe">
                    </div>
                </div>
            </div>
            
            <div class="mb-3">
                <label for="email" class="form-label">Adresse e-mail</label>
                <input id="email" type="email" name="email" class="form-control" placeholder="johne.doe@email.com">
            </div>

            <div class="mb-3">
                <label for="pass" class="form-label">Mot de passe</label>
                <input id="pass" type="password" name="pass" class="form-control" placeholder="***********">
            </div>

            <div class="mb-3 text-end">
                <input type="submit" name="signup" class="btn btn-primary disabled" v-if="mode == 'login'" value="Se connecter">
                <input type="submit" name="signup" class="btn btn-primary disabled" v-else value="S'inscrire">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: () => {
            return {
                mode: 'login',
            }
        },
        methods: {
            switchCreate: function() {
                this.mode = 'create'
            },
            switchLogin: function() {
                this.mode = 'login'
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