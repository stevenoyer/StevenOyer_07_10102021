const mysql = require('mysql')
const env = require('dotenv').config()

const sql = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

sql.connect((error) => {
    if (error)
    {
        return console.error('SQL ERROR ', error.message)
    }

    console.log('La connnexion à la base de données a bien été établie.')
})

module.exports = sql