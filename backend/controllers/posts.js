const db = require('../db-steven')
const env = require('dotenv').config()

// Récupération de toutes les publications
exports.getPosts = (req, res, next) => {
    db.query(`
        SELECT p.*, u.id AS userId, u.nom AS nom, u.prenom AS prenom, u.avatar AS avatar, u.email AS email, u.admin AS admin
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
        SELECT p.*, u.id AS userId, u.nom AS nom, u.prenom AS prenom, u.avatar AS avatar, u.email AS email, u.admin AS admin
        FROM posts AS p
        LEFT JOIN users AS u ON p.created_by = u.id
        WHERE p.id = ?`, [req.params.id], (err, result) => {
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
        SELECT p.*, u.id AS userId, u.nom AS nom, u.prenom AS prenom, u.avatar AS avatar, u.email AS email, u.admin AS admin, l.id_user AS like_user, l.id_post AS like_post
        FROM posts AS p
        LEFT JOIN users AS u ON p.created_by = u.id
        LEFT JOIN likes AS l ON l.id_post = p.id AND l.id_user = u.id
        WHERE p.created_by = ?
        ORDER BY p.created DESC`, [req.params.id], (err, result) => {
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
    let image = req.body.image

    if (req.file) {
        image = req.protocol + '://' + req.get('host') + '/images/' + req.file.filename
    }else {
        image = null
    }

    console.log(content, created_by, image)

    let obj = {
        content: content,
        image: image,
        created_by: created_by
    }

    db.query(`INSERT INTO posts SET ?`, obj, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'Votre publication a bien été postée.'})
    })
}

// Suppression d'une publication et ces commentaires
exports.deletePostById = (req, res, next) => {
    db.query(`DELETE FROM posts WHERE id = ?`, [req.params.id], (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }

        db.query(`DELETE FROM likes WHERE id_post = ?`, [req.params.id])

        db.query(`DELETE FROM comments WHERE parent = ?`, [req.params.id], (err, result) => {
            if (err)
            {
                console.log(err)
                return res.status(401).json({message: err})
            }
            return res.status(200).json({message: 'La publication et les likes et les commentaires ont bien été supprimé(e)(s).'})
        })
    })
}

// Modification d'une publication
exports.modifyPostById = (req, res, next) => {
    let content = req.body.content
    db.query(`UPDATE posts SET content = ? WHERE id = ?`, [content, req.params.id], (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'La publication a bien été modifée.'})
    })
}

// Like d'une publication
exports.likePost = (req, res, next) => {
    let postId = req.params.id
    let userId = req.body.userId

    db.query(`SELECT * FROM likes WHERE id_user = ? AND id_post = ?`, [userId, postId], (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }

        if (result.length > 0)
        {
            db.query(`DELETE FROM likes WHERE id_user = ? AND id_post = ?`, [userId, postId])
            return res.status(200).json({message: 'Like supprimé.', liked: 0})
        }
        else 
        {
            let obj = {
                id_user: userId,
                id_post: postId
            }

            db.query(`INSERT INTO likes SET ?`, obj, (err, result) => {
                if (err)
                {
                    console.log(err)
                    return res.status(401).json({message: err})
                }
                return res.status(200).json({message: 'Publication liké !', liked: 1})
            })
        }

    })

}

// Récupère les likes d'un utilisateur
exports.getLikesByUser = (req, res, next) => {
    db.query(`
        SELECT u.id, l.id_user AS like_user, l.id_post AS like_post
        FROM users AS u
        LEFT JOIN likes AS l ON l.id_user = u.id
        WHERE u.id = ?`, [req.params.id], (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json(result)
    })
}

// Récupération de tous les commentaires d'une publication
exports.getAllComments = (req, res, next) => {
    db.query(`
    SELECT c.*, u.id AS userId, u.nom AS nom, u.prenom AS prenom, u.avatar AS avatar, u.email AS email, u.admin AS admin
    FROM comments AS c
    LEFT JOIN users AS u ON u.id = c.created_by
    WHERE c.parent = ?
    ORDER BY c.created DESC`, [req.params.id], (err, result) => {
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

    let obj = {
        content: content,
        parent: parent,
        created_by: created_by
    }

    db.query(`INSERT INTO comments SET ?`, obj, (err, result) => {
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
    let comment_id = req.params.id_comment

    db.query(`DELETE FROM comments WHERE parent = ? AND id = ?`, [parent, comment_id], (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }
        return res.status(200).json({message: 'Le commentaire a bien été supprimé.'})
    })
}