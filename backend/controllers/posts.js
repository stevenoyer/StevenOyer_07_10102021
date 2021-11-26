const db = require('../db-steven')
const env = require('dotenv').config()

// Récupération de toutes les publications
exports.getPosts = (req, res, next) => {
    console.log('test')
    db.query(`
        SELECT p.*, u.*
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
        SELECT p.*, u.*
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
        SELECT p.*, u.*
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
    let content = req.body.content
    let created_by = req.body.userId

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

// Récupération de tous les commentaires d'une publication
exports.getAllComments = (req, res, next) => {
    db.query(`
    SELECT c.*, u.*
    FROM comments AS c
    LEFT JOIN users AS u ON u.id = c.created_by
    WHERE c.parent = ${req.params.id}
    `, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json(result)
    })
}

// Publication d'un commentaire sur une publication
exports.newComment = (req, res, next) => {
    let content = req.body.content
    let created_by = req.body.userId
    let parent = req.params.id

    db.query(`INSERT INTO comments (content, parent, created_by) VALUES("${content}", "${parent}", "${created_by}")`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'Votre commentaire a bien été posté.'})
    })
}

// Suppression d'un commentaire sur une publication
exports.deleteComment = (req, res, next) => {
    let parent = req.params.id
    let commentId = req.body.commendId

    db.query(`DELETE FROM comments WHERE parent = ${parent} AND id = ${commentId}`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'Le commentaire a bien été supprimé.'})
    })
}