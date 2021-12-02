const express = require('express')
const postsCtrl = require('../controllers/posts')
const auth = require('../middleware/auth')
const upload_file = require('../middleware/upload')

const router = express.Router()

// Publications
router.get('/', auth, postsCtrl.getPosts)
router.post('/', auth, upload_file, postsCtrl.newPost)

router.get('/:id', auth, postsCtrl.getPostById)
router.put('/:id', auth, postsCtrl.modifyPostById)
router.delete('/:id', auth, postsCtrl.deletePostById)

router.post('/:id', auth, postsCtrl.likePost)

router.get('/likes/:id', auth, postsCtrl.getLikesByUser)

router.get('/user:id/posts', auth, postsCtrl.getUserPosts)

// Commentaires
router.get('/:id/comments', auth, postsCtrl.getAllComments)
router.post('/:id/comments', auth, postsCtrl.newComment)
router.delete('/:id/comments/:id_comment', auth, postsCtrl.deleteComment)

module.exports = router