<template>
    <div v-if="connected" id="posts-section">
        <div class="post-input">
            <div class="my-3">
                <h3>Exprimez-vous {{ prenom }} !</h3>
            </div>
            <div class="mb-3">
                <label for="content-text" class="form-label"></label>
                <textarea class="form-control" name="content" v-model="content" id="content-text" rows="4" placeholder="Quoi de neuf ?"></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <div class="upload">
                    <!-- <label class="btn btn-groupomania" for="image">
                        Impoter une image
                        <input type="file" name="image" id="image" class="btn btn-groupomania" value="joindre une image">
                    </label> -->
                </div>
                <button @click="post()" type="submit" class="btn btn-groupomania" :class="{'disabled' : !validateFields}">Publier</button>
            </div>
        </div>

        <div class="list-posts mt-5">
            <ListPost />
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
            content: ''
        }
    },
    components: {
        ListPost
    },
    computed: {
        validateFields: function() {
            console.log(this.content)
            if (this.content != "") {
                return true
            }else {
                return false
            }
        },
        ...mapState(['connected', 'token', 'prenom', 'userId'])
    },
    methods: {
        post: function() {
            console.log(this.userId, this.content)
            axios.post('http://localhost:3200/api/posts', {
                content: this.content,
                userId: this.userId
            }, {headers: {Authorization: 'Bearer ' + this.token}})
            .then(response => {
                console.log(response)
                console.log(this.userId)
                this.$router.go()
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
    #posts-section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 60%;
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

</style>