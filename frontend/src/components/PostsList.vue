<template>
    <div>
        <div class="card mb-4" v-for="post in listPosts" :key="post">
            <div class="card-header d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45">
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
                <p class="card-text">{{ post.content }}</p>
                <div id="mode-edit" v-if="this.editMode.postId == post.id && this.editMode.edit == true">
                    {{ this.editMode }}
                    <textarea class="mb-3 form-control" name="content" v-model="content" id="content-text" rows="4" placeholder="Quoi de neuf ?"></textarea>
                    <div class="text-end">
                        <button @click="updatePost(post.id)" class="btn btn-success">Mettre à jour</button>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn"><i class="fas fa-heart"></i></button>
                <button class="btn"><i class="fas fa-comments"></i></button>
                <button class="btn disabled"><i class="fas fa-share"></i></button>
            </div>
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
            listPosts: [],
            editMode: {},
            content: ''
        }
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
            }else if (diffMinutes > 120 && diffDay == 0) {
                return 'Il y a ' + Math.round(diffMinutes / 60) + ' heures'
            }else if (diffMinutes >= 1440 && diffDay == 1) {
                return 'Il y a un jour'
            }else if (diffMinutes > 1440 && (diffDay > 1 && diffDay < 30)) {
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
            axios.delete(`http://localhost:3200/api/posts/${id}`)
            .then(response => {
                console.log(response)
                this.$router.go()
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
            this.content = ''
        },
        updatePost(id) {
            console.log(this.content, id)
            axios.put(`http://localhost:3200/api/posts/${id}`, {
                content: this.content
            })
            .then(response => {
                console.log(response)
                this.$router.go()
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        axios.get('http://localhost:3200/api/posts')
        .then(response => {
            console.log(response.data)
            this.listPosts = response.data
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>

<style scoped>
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

    .card button:focus {
        box-shadow: none;
    }

    .card .card-footer button i {
        font-size: 20px;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }

    .card .card-footer button i.fa-heart:hover {
        transition: all 0.5s ease-in-out;
        color: #dc3545;
    }

    .card .card-footer button i.fa-comments:hover {
        transition: all 0.5s ease-in-out;
        color: #FFD7D7;
    }

    .card .card-footer button i.fa-share:hover {
        transition: all 0.5s ease-in-out;
        color: #0dcaf0;
    }

    .card .card-header button i.fa-trash {
        transition: all 0.5s ease-in-out;
        color: #fff;
        font-size: 20px;
    }

    .card .card-header button i.fa-trash:hover {
        transition: all 0.5s ease-in-out;
        color: #dc3545;
    }

    .card .card-header button i.fa-edit {
        transition: all 0.5s ease-in-out;
        color: #fff;
        font-size: 20px;
    }

    .card .card-header button i.fa-edit:hover {
        transition: all 0.5s ease-in-out;
        color: #0dcaf0;
    }

    .created {
        font-size: 11px;
    }

    .author {
        font-weight: bold;
    }
</style>