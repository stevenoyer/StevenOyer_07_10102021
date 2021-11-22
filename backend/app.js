const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')
const env = require('dotenv').config()
const cors = require('cors')
const xss = require('xss-clean')

// Routes
const auth = require('./routes/auth')
//const posts = require('./routes/posts')

// App
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use('/images', express.static('images'))
app.use('/api/auth', auth)
/* app.use('/api/posts', posts) */




// Server
app.listen(process.env.PORT || '3000', () => {
    let port = process.env.PORT ? process.env.PORT : 3000;
    console.log(`Le serveur est démarré. Port : ${port}`)
})