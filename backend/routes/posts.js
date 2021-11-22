const express = require('express')
const postsCtrl = require('../controllers/posts')
const auth = require('../middleware/auth')

const router = express.Router()

// Publications
router.get('/', postsCtrl.getPosts)
router.post('/', postsCtrl.newPost)

router.get('/:id', postsCtrl.getPostById)
router.put('/:id', postsCtrl.modifyPostById)
router.delete('/:id', postsCtrl.deletePostById)

router.get('/user:id/posts', postsCtrl.getUserPosts)

// Commentaires
router.get('/:id/comments', postsCtrl.getAllComments)
router.post('/:id/comments', postsCtrl.newComment)
router.delete('/:id/comments', postsCtrl.deleteComment)

module.exports = router