<template>
    <div class="container-fluid container-md">
        <div id="post-section">
            <div class="list-posts mt-5">
                
                <ListPost v-if="this.post" :key="this.post.id"
                    :id="this.post.id" 
                    :prenom="this.post.prenom"
                    :nom="this.post.nom"
                    :created="this.post.created"
                    :created_by="this.post.created_by"
                    :image="this.post.image"
                    :like_post="this.post.like_post"
                    :like_user="this.post.like_user"
                    :content="this.post.content"
                    :avatar="this.post.avatar"
                />

                <div class="post-comment mt-4">
                    <label>Poster un commentaire</label>
                    <div class="d-flex align-items-center">
                        <input type="text" name="comment" v-model="comment" class="form-control" placeholder="Exprimez-vous">
                        <button @click="postComment(this.post.id)" class="btn" :class="{'disabled' : !validateFields}"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>

                <div class="mt-4">
                    <div v-for="comment in this.comments" :key="comment">
                        <div class="card mb-4">
                            <div class="delete-comment" v-if="comment.created_by == this.userId || this.admin == true">
                                <button @click="deleteComment(comment.id)" class="btn"><i class="fas fa-trash"></i></button>
                            </div>
                            <div class="row card-body d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center col-12 col-md-6 col-lg-3">
                                    <img class="rounded-circle" v-if="comment.avatar" :src="comment.avatar" width="45">
                                    <img class="rounded-circle" v-else src="https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png" width="45">
                                    <div class="ms-2">
                                        <p class="author">{{ comment.prenom }} {{ comment.nom }}</p>
                                        <p class="created">{{ formatDate(comment.created) }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-9">
                                    <p>{{ comment.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    const axios = require('axios').default
    import ListPost from '../components/PostsList.vue'

    export default {
        name: 'Post',
        components: {
            ListPost
        },
        data: () => {
            return {
                post: {},
                editMode: {},
                comment: '',
                comments: '',
                isLiked: false
            }
        }, 
        computed: {
            validateFields () {
                console.log(this.comment)
                if (this.comment != "") {
                    return true
                }else {
                    return false
                }
            },
            ...mapState(['token', 'userId', 'admin']),
            likedPost() {
                let likesArray = this.likePosts
                likesArray.forEach(like => {
                    if (like.like_post == this.post.id && like.like_user == this.userId)
                    {
                        this.isLiked = true
                    }
                })
                console.log('isLiked', this.isLiked)
                return this.isLiked
            }
        },
        methods: {
            deleteComment(comment_id) {
                console.log(comment_id, this.token)

                axios.delete(`http://localhost:3200/api/posts/${this.post.id}/comments/${comment_id}`, {
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
            postComment(id) {
                console.log(id)
                let obj = {
                    content: this.comment,
                    userId: this.userId
                }
                console.log(obj)
                axios.post(`http://localhost:3200/api/posts/${id}/comments`, obj, {
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
            }
        },
        mounted() {
            axios.get(`http://localhost:3200/api/posts/${this.$route.params.id}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                this.post = response.data[0]
                console.log(response)
                console.log(this.post)
            })
            .catch(error => {
                console.log(error)
            })

            axios.get(`http://localhost:3200/api/posts/${this.$route.params.id}/comments`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                this.comments = response.data
                console.log(this.comments)
            })
            .catch(error => {
                console.log(error)
            })

            axios.get(`http://localhost:3200/api/posts/likes/${this.userId}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                this.likePosts = response.data
                console.log(this.likePosts)
            })
            .catch(error => {
                console.log(error)
            })
        },
    }
</script>

<style scoped>

    #post-section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
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

    button:focus {
        box-shadow: none;
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

    .created {
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

    @media screen and (min-width: 640px) {
        #post-section {
            width: 60%;
        }
    }
</style>