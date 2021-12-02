<template>
  <div v-if="isConnected()" class="container-fluid container-md mt-5">
    <div class="container">
      <div class="row gutters">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="account-settings">
                <div class="user-profile">
                  <div class="user-avatar">
                    <label>
                      <div class="modify-profile">
                        <p>Modifier</p>
                      </div>
                      <input @change="updateAvatar($event)" type="file" name="avatar" id="inputAvatar">
                      <img v-if="avatar" :src="avatar">
                      <img v-else src="https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png">
                    </label>
                  </div>
                  <h5 class="user-name">{{ prenom }} {{ nom }}</h5>
                  <h6 class="user-email">{{ email }}</h6>
                  <button @click="deleteAccount()" class="btn btn-danger mt-4">Supprimer mon compte</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div class="card h-100">
            <div class="card-body">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mb-2 text-danger">Détails du compte</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                  <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input type="text" class="form-control" @input="newPrenom = $event.target.value" id="prenom" placeholder="John" :value="prenom">
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                  <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" class="form-control" @input="newNom = $event.target.value" id="nom" placeholder="Doe" :value="nom">
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-4">
                  <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" @input="newEmail = $event.target.value" id="email" placeholder="john.doe@example.com" :value="email">
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3 my-4">
                  <div class="form-group">
                    <label for="pass">Nouveau mot de passe</label>
                    <input type="password" v-model="newPass" class="form-control" id="pass" placeholder="*************">
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="text-right d-flex justify-content-end">
                    <button @click="updateUser()" id="submit" name="submit" class="btn btn-primary">Mettre à jour</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="posts-section">
      <div class="list-posts mt-5">
        <h4>Vos publications</h4>
        <div v-for="post in listPostsUser" :key="post">
          <ListPost 
            :id="post.id" 
            :prenom="post.prenom"
            :nom="post.nom"
            :created="post.created"
            :created_by="post.created_by"
            :image="post.image"
            :like_post="post.like_post"
            :like_user="post.like_user"
            :content="post.content"
            :avatar="post.avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import ListPost from '../components/PostsList.vue'

  export default {
      name: 'Profil',
      components: {
        ListPost
      },
      data() {
        return {
          newPrenom: '',
          newNom: '',
          newEmail: '',
          newPass: '',
          newAvatar: '', 
          listPostsUser: []
        }
      },
      computed: {
        ...mapState(['connected', 'prenom', 'nom', 'email', 'avatar', 'userId', 'token'])
      },
      methods: {
        updateUser() {

          let data = new FormData()
          data.append('userId', this.userId)

          if (this.newPrenom != "") {
            data.append('prenom', this.newPrenom)
          }else {
            data.append('prenom', this.prenom)
          }

          if (this.newNom != "") {
            data.append('nom', this.newNom)
          }else {
            data.append('nom', this.nom)
          }

          if (this.newEmail != "") {
            data.append('email', this.newEmail)
          }else {
            data.append('email', this.email)
          }

          if (this.newPass != "") {
            data.append('pass', this.newPass)
          }

          if (this.image != "") {
            data.append('image', this.image)
          }

          axios.put('http://localhost:3200/api/auth/update', data, {
            headers: {
              Authorization: `Bearer ${this.token}`,
              'Content-Type': 'image/jpeg'
            }
          })
          .then(response => {
            console.log(response)
            this.$store.dispatch('updateAccount', {
                userId: response.data.userId,
                prenom: response.data.prenom,
                nom: response.data.nom,
                email: response.data.email,
                avatar: response.data.avatar
            })
            this.$router.go()
          })
          .catch(error => {
            console.log(error)
          })  
        },
        isConnected() {
          if (!this.connected) {
            this.$router.push('/')
            return this.connected
          }

          return this.connected
        },
        deleteAccount() {
          axios.delete(`http://localhost:3200/api/auth/delete/${this.userId}`, {
            headers: {
              Authorization: `Bearer ${this.token}`,
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
              console.log(response)
              this.$store.dispatch('disconnect')
              this.$router.go()
          })
          .catch(error => {
              console.log(error)
          })
        },
        updateAvatar(event) {
          this.image = event.target.files[0]
          this.avatar = URL.createObjectURL(this.image)
        }
      },
      mounted() {
        axios.get(`http://localhost:3200/api/posts/user${this.userId}/posts`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
            this.listPostsUser = response.data
        })
        .catch(error => {
            console.log(error)
        })
      },
  }
</script>

<style scoped>
    #posts-section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
    }

    .account-settings .user-profile {
        margin: 0 0 1rem 0;
        padding-bottom: 1rem;
        text-align: center;
    }

    .account-settings .user-profile .user-avatar {
        margin: 0 0 1rem 0;
    }

    .account-settings .user-profile .user-avatar img {
        width: 90px;
        height: 90px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
    }

    .account-settings .user-profile h5.user-name {
        margin: 0 0 0.5rem 0;
    }

    .account-settings .user-profile h6.user-email {
        margin: 0;
        font-size: 0.8rem;
        font-weight: 400;
        color: #9fa8b9;
    }

    .account-settings .about {
        margin: 2rem 0 0 0;
        text-align: center;
    }

    .account-settings .about h5 {
        margin: 0 0 15px 0;
        color: #007ae1;
    }

    .account-settings .about p {
        font-size: 0.825rem;
    }

    .form-control {
        border: 1px solid #cfd1d8;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        font-size: .825rem;
        background: #ffffff;
        color: #2e323c;
    }

    .card {
        background: #ffffff;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 0;
        margin-bottom: 1rem;
    }

    #inputAvatar {
      display: none;
    }

    .user-avatar label {
      cursor: pointer;
      position: relative;
    }

    .user-avatar label .modify-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: #fff;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }

    .user-avatar label .modify-profile:hover {
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }

    .user-avatar label .modify-profile p {
      margin: 0;
    }

    @media screen and (min-width: 640px) {
        #posts-section {
            width: 60%;
        }
    }

</style>