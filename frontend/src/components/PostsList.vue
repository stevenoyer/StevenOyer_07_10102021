<template>
    <div class="card mt-4">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <router-link :to="'/user/' + created_by" class="d-flex align-items-center">
                    <img class="rounded-circle" v-if="avatar" :src="avatar" width="45">
                    <img class="rounded-circle" v-else src="https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png" width="45">
                    <div class="ms-2">
                        <p class="author">{{ prenom }} {{ nom }}</p>
                        <p class="created">{{ formatDate(created) }}</p>
                    </div>
                </router-link>
            </div>
            <div class="d-flex align-items-center" v-if="created_by == this.userId || this.admin == true">
                <button @click="deletePost(id)" class="btn"><i class="fas fa-trash"></i></button>
                <button @click="updateEditMode(id)" class="btn"><i class="fas fa-edit"></i></button>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text" v-if="content">{{ content }}</p>
            <div class="text-center mt-4" v-if="image">
                <img class="image-post" :src="image">
            </div>
            <div id="mode-edit" v-if="this.editMode.postId == id && this.editMode.edit == true" class="mt-4">
                <textarea class="mb-3 form-control" name="content" v-model="newContent" id="content-text" rows="4" placeholder="Quoi de neuf ?"></textarea>
                <div class="text-end">
                    <button @click="this.editMode.edit = false" class="btn btn-danger me-4">Annuler</button>
                    <button @click="updatePost(id)" class="btn btn-success">Mettre à jour</button>
                </div>
            </div>
        </div>
        <div class="card-footer text-end">
            <button :id="'button-like-' + id" @click="like(id)" class="btn" :class="{'liked' : isLiked}"><i class="fas fa-heart"></i></button>
            <router-link class="btn" :to="'/post/' + id"><i class="fas fa-comments"></i></router-link>
            <button class="btn disabled"><i class="fas fa-share"></i></button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
const axios = require('axios').default;

export default {
    name: 'ListPost',
    data: () => {
        return {
            editMode: {},
            newContent: '',
            liked: ''
        }
    }, 
    props: {
        id: Number,
        prenom: String,
        nom: String,
        created: [String, Date],
        created_by: Number,
        image: String,
        like_post: Number,
        like_user: Number,
        content: String,
        avatar: String,
        isLiked: Boolean
    },
    computed: {
        ...mapState(['token', 'userId', 'admin']),
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
            }else if (diffMinutes >= 60 && diffDay == 0) {
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
        deletePost(id) {
            axios.delete(`http://localhost:3200/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                if (this.$route.params.id) {
                    this.$router.push('/')
                }else {
                    this.$router.go()
                }
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateEditMode(id) {
            this.editMode = {
                edit: true,
                postId: id
            }
            this.newContent = ''
        },
        updatePost(id) {
            console.log(this.content, id)
            axios.put(`http://localhost:3200/api/posts/${id}`, {
                content: this.newContent
            }, 
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                this.$router.go()
            })
            .catch(error => {
                console.log(error)
            })
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
        }
    }
}
</script>

<style>

    a {
        text-decoration: none;
        color: #fff;
    }

    .list-posts {
        width: 100%;
    }  
    
    p {
        margin: 0;
    }

    .card {
        width: 100%;
        border-radius: 10px;
    }

    .card .card-header {
        background: #212529;
        color: #fff;
        padding: 16px;
        border-radius: 10px 10px 0 0;
    }

    .card .card-body {
        border-radius: 0;
        padding: 24px 16px;
    }

    .card .card-footer {
        background: #212529;
        padding: 16px;
        border-radius: 0 0 10px 10px;
    }

    button:focus, .btn:focus {
        box-shadow: none !important;
    }

    .card .card-footer .btn i {
        font-size: 20px;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }

    .card .card-footer .btn i.fa-heart:hover {
        transition: all 0.5s ease-in-out;
        color: #dc3545;
    }

    .card .card-footer .btn i.fa-comments:hover {
        transition: all 0.5s ease-in-out;
        color: #FFD7D7;
    }

    .card .card-footer .btn i.fa-share:hover {
        transition: all 0.5s ease-in-out;
        color: #0dcaf0;
    }

    .card .card-header .btn i.fa-trash {
        transition: all 0.5s ease-in-out;
        color: #fff;
        font-size: 20px;
    }

    .delete-comment .btn i.fa-trash {
        transition: all 0.5s ease-in-out;
        color: #000;
        font-size: 20px;
    }

    .card .card-header .btn i.fa-trash:hover,
    .delete-comment .btn i.fa-trash:hover {
        transition: all 0.5s ease-in-out;
        color: #dc3545;
    }

    .card .card-header .btn i.fa-edit {
        transition: all 0.5s ease-in-out;
        color: #fff;
        font-size: 20px;
    }

    .card .card-header .btn i.fa-edit:hover {
        transition: all 0.5s ease-in-out;
        color: #0dcaf0;
    }

    .created,
    .info-mail {
        font-size: 11px;
    }

    .author {
        font-weight: bold;
    }

    .delete-comment {
        position: absolute;
        right: 0;
        top: 0;
    }

    .image-post {
        max-width: 100%;
        border-radius: 10px;
    }

    .liked i.fa-heart {
        transition: all 0.5s ease-in-out;
        color: #dc3545 !important;
        animation: liked 0.3s ease-in-out;
    }

    @keyframes liked {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.5);
        }

        100% {
            transform: scale(1);
        }
    }
</style>