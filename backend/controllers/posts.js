const db = require('../db-steven')
const env = require('dotenv').config()

// Récupération de toutes les publications
exports.getPosts = (req, res, next) => {
    console.log('test')
    db.query(`
        SELECT p.* 
        FROM posts AS p
        LEFT JOIN users AS u ON p.created_by = u.id
        ORDER BY p.created DESC`
    , (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json(result)
    })
}

// Récupération d'une seule publication
exports.getPostById = (req, res, next) => {
    db.query(`
        SELECT p.* 
        FROM posts AS p
        LEFT JOIN users AS u ON p.created_by = u.id
        WHERE p.id = ${req.params.id}`
    , (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json(result)
    })
}

// Récupération des publications d'un utilisateur
exports.getUserPosts = (req, res, next) => {
    db.query(`
        SELECT p.* 
        FROM posts AS p
        LEFT JOIN users AS u ON p.created_by = u.id
        WHERE p.created_by = ${req.params.id}`
    , (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json(result)
    })
}

// Création d'une publication
exports.newPost = (req, res, next) => {
    /* DEBUG */
    const body = JSON.stringify(req.body)
    const json = JSON.parse(body)
    /* END DEBUG */

    let content = json.body.content
    let created_by = json.body.user

    db.query(`INSERT INTO posts (content, created_by) VALUES("${content}", "${created_by}")`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'Votre publication a bien été postée.'})
    })
}

// Suppression d'une publication
exports.deletePostById = (req, res, next) => {
    db.query(`DELETE FROM posts WHERE id = ${req.params.id}`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'La publication a bien été supprimée.'})
    })
}

// Modification d'une publication
exports.modifyPostById = (req, res, next) => {
    /* DEBUG */
    const body = JSON.stringify(req.body)
    const json = JSON.parse(body)
    /* END DEBUG */

    let content = json.body.content
    db.query(`UPDATE posts SET content = "${content}" WHERE id = ${req.params.id}`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'La publication a bien été modifée.'})
    })
}