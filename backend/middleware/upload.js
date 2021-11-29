const multer = require('multer')

const MIMES_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp' : 'webp',
    'image/gif' : 'gif'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = req.body.userId + '_' + file.originalname
        callback(null, name)
    }
})

const upload = multer({
    storage: storage,
    limits: 1200000
})

module.exports = upload.single('image')