const express = require('express')
const authCtrl = require('../controllers/auth')
const auth = require('../middleware/auth')
//const upload_file = require('../middleware/upload')

const router = express.Router()

router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)
//router.post('/update', auth, upload_file, authCtrl.update)
//router.post('/delete/:id', authCtrl.delete)
router.use(authCtrl.errors)

module.exports = router