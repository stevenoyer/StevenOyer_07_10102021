const multer = require('multer')

const MIMES_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp' : 'webp'
}

const storage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, callback) => {
        let name = req.body.userId
        const extension = MIMES_TYPES[file.mimetype]
        callback(null, name)
    }
})

const upload = multer({
    storage: storage,
    limits: 1200000
})

module.exports = upload.single('image')