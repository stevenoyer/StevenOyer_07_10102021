const express = require('express')
const app = express()
const xss = require('xss-clean')
const helmet = require('helmet')
const path = require('path')
const env = require('dotenv').config()
const cors = require('cors')

// Routes
const auth = require('./routes/auth')
//const posts = require('./routes/posts')

// App
app.use(cors)
app.use(xss)
app.use(express.json())
app.use(helmet)
app.use('/images', express.static('images'))
app.use('/api/auth', auth)
/* app.use('/api/posts', posts) */

app.post('/testlol', (req, res, next) => {
    console.log(req.body.message)
    console.log('cc')
})

app.get('/testlol', (req, res, next) => {
    console.log(req.body.message)
    console.log('cc 2')
})


// Server
app.listen(process.env.PORT || '3000', () => {
    console.log('Le serveur est démarré.')
})