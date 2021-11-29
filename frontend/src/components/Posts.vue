<template>
    <div v-if="connected" id="posts-section">
        <div class="post-input">
            <div class="my-3">
                <h3>Exprimez-vous {{ prenom }} !</h3>
            </div>
            <div class="mb-3">
                <label for="content-text" class="form-label"></label>
                <textarea class="form-control" name="content" v-model="content" id="content-text" rows="1" :placeholder="'Quoi de neuf, ' + prenom + ' ?'"></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <div class="upload">
                    <label class="btn btn-groupomania" for="image">
                        Impoter une image
                        <input @change="uploadImage($event)" type="file" name="image" id="image" class="btn btn-groupomania">
                    </label>
                </div>
                <button @click="post()" type="submit" class="btn btn-groupomania" :class="{'disabled' : !validateFields}">Publier</button>
            </div>
        </div>

        <div class="list-posts mt-5">
            <div v-for="post in listPosts" :key="post">
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

</template>

<script>
import { mapState } from 'vuex'
import ListPost from './PostsList.vue'

const axios = require('axios').default

export default {
    name: 'Posts',
    data: () => {
        return {
            listPosts: [],
            content: '',
            image: '',
            imageUrl: ''
        }
    },
    components: {
        ListPost
    },
    computed: {
        validateFields: function() {
            console.log(this.content)
            if (this.content != "" || this.image != "") {
                return true
            }else {
                return false
            }
        },
        ...mapState(['connected', 'token', 'prenom', 'userId'])
    },
    methods: {
        post() {
            let data = new FormData()

            data.append('content', this.content)
            data.append('userId', this.userId)
            data.append('image', this.image)

            console.log(this.userId, this.content, this.image)
            axios.post('http://localhost:3200/api/posts', data, 
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'image/jpeg'
                }
            })
            .then(response => {
                console.log(response)
                console.log(this.userId)
                this.$router.go()
            })
            .catch(error => {
                console.log(error)
            })
        },
        uploadImage(event) {
          this.image = event.target.files[0]
          this.imageUrl = URL.createObjectURL(this.image)
          console.log(this.image)
        }
    },
    mounted() {
        axios.get('http://localhost:3200/api/posts', {
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data)
            this.listPosts = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
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

    .post-input {
        padding: 10px 20px;
        background: #212529;
        width: 100%;
        border-radius: 10px;
    }

    .post-input h3 {
        color: #fff;
    }

    .post-input textarea {
        width: 100%;
        margin: 0;
    }

    .btn-groupomania {
        background: #FFD7D7;
        color: #212529;
    }

    input[type=file] {
        display: none;
    }

    .list-posts {
        width: 100%;
    }

    @media screen and (min-width: 640px) {
        #posts-section {
            width: 60%;
        }
    }
</style>