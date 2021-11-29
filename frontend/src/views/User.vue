<template>
    <div class="container-fluid container-md mt-5">
        <div id="user-section">
            <div class="card mb-4">
                <div class="delete-comment" v-if="this.admin == true">
                    <button @click="deleteUser(this.userInfo.id)" class="btn"><i class="fas fa-trash"></i></button>
                </div>
                <div class="row card-body d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center col-3">
                        <img class="rounded-circle" v-if="this.userInfo.avatar" :src="this.userInfo.avatar" width="45">
                        <img class="rounded-circle" v-else src="https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png" width="45">
                        <div class="ms-2">
                            <p class="author">{{ this.userInfo.prenom }} {{ this.userInfo.nom }}</p>
                            <p class="info-mail">{{ this.userInfo.email }}</p>
                        </div>
                    </div>
                    <div class="col-9">
                        <p></p>
                    </div>
                </div>
            </div>

            <div class="card mb-4" v-for="post in listPostsUser" :key="post">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle" v-if="post.avatar" :src="post.avatar" width="45">
                        <img class="rounded-circle" v-else src="https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png" width="45">
                        <div class="ms-2">
                            <p class="author">{{ post.prenom }} {{ post.nom }}</p>
                            <p class="created">{{ formatDate(post.created) }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center" v-if="post.created_by == this.userId || this.admin == true">
                        <button @click="deletePost(post.id)" class="btn"><i class="fas fa-trash"></i></button>
                        <button @click="updateEditMode(post.id)" class="btn"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text mb-4" v-if="post.content">{{ post.content }}</p>
                    <div class="text-center">
                        <img class="image-post" v-if="post.image" :src="post.image">
                    </div>
                    <div id="mode-edit" v-if="this.editMode.postId == post.id && this.editMode.edit == true">
                        <textarea class="mb-3 form-control" name="content" v-model="content" id="content-text" rows="4" placeholder="Quoi de neuf ?"></textarea>
                        <div class="text-end">
                            <button @click="this.editMode.edit = false" class="btn btn-danger me-4">Annuler</button>
                            <button @click="updatePost(post.id)" class="btn btn-success">Mettre à jour</button>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button :id="'button-like-' + post.id" @click="like(post.id)" class="btn" :class="{'liked' : post.like_post && post.like_user}"><i class="fas fa-heart"></i></button>
                    <router-link class="btn" :to="'/post/' + post.id"><i class="fas fa-comments"></i></router-link>
                    <button class="btn disabled"><i class="fas fa-share"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import axios from 'axios'

    export default {
        name: 'User',
        data() {
            return {
                listPostsUser: [],
                editMode: {},
                userInfo: {}
            }
        },
        computed: {
            ...mapState(['token', 'userId', 'admin'])
        },
        methods: {
            formatDate(date) {
                let newDate = new Date(date)
                let today = new Date()

                let diff = today.getTime() - newDate.getTime()
                let diffDay = Math.round(diff / (1000 * 3600 * 24))
                let diffMinutes = Math.round(diff / (1000 * 60))
                let diffSecondes = Math.round(diff / 1000)
                
                if (diffSecondes < 120 && diffDay == 0) {
                    return 'Il y a un instant'
                }else if (diffMinutes < 59 && diffDay == 0) {
                    return 'Il y a ' + diffMinutes + ' minutes'
                }else if (diffMinutes == 60 && diffDay == 0) {
                    return 'Il y a 1 heure'
                }else if ((diffMinutes > 120 && diffMinutes < 1440) && (diffDay == 0 || diffDay == 1)) {
                    return 'Il y a ' + Math.round(diffMinutes / 60) + ' heures'
                }else if (diffMinutes >= 1440 && diffDay == 1) {
                    return 'Il y a un jour'
                }else if (diffMinutes > 1440 && (diffDay > 1 && (diffDay < 30 || diffDay < 31))) {
                    return 'Il y a ' + diffDay + ' jours'
                }else if (diffMinutes > 1440 && (diffDay > 30 && diffDay < 365)) {
                    return 'Il y a ' + Math.round(diffDay / 30) + ' mois'
                }else if (diffDay >= 365 && diffDay < 730) {
                    return 'Il y a plus d\'un an'
                }else if (diffDay >= 730) {
                    return 'Il y a ' + Math.round(diffDay / 365) + ' ans'
                }
            },
            updateEditMode(id) {
                this.editMode = {
                    edit: true,
                    postId: id
                }
                this.content = ''
            },
            like(id) {
                axios.post(`http://localhost:3200/api/posts/${id}`, {userId: this.userId}, 
                {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    console.log(response)
                    let button_like = document.querySelector('#button-like-' + id)
                    if (response.data.liked) {
                    button_like.classList.add('liked')
                    }else {
                        button_like.classList.remove('liked')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            },
            deleteUser(id) {
                if (this.admin == true) {
                    axios.delete(`http://localhost:3200/api/auth/delete/${id}`, {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => {
                        console.log(response)
                        this.$route.push('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
            }
        },
        mounted() {
            axios.get(`http://localhost:3200/api/posts/user${this.$route.params.id}/posts`, {
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

            axios.get(`http://localhost:3200/api/auth/user/${this.$route.params.id}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                this.userInfo = response.data[0]
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
</script>

<style scoped>
    #user-section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
    }

</style>