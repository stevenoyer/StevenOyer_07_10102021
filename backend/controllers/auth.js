const bcrypt = require('bcrypt')
const fs = require('fs')
const db = require('../db-steven')
const jwt = require('jsonwebtoken')

// Inscription de l'utilisateur
exports.signup = (req, res, next) => {
   
    let email = req.body.email
    let prenom = req.body.prenom
    let nom = req.body.nom
    let mdp = req.body.pass

    console.log('Email : ', email, ' / Prenom : ', prenom, ' / Nom : ', nom, ' / Mdp : ', mdp)

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!email.match(regex))
    {
        console.log('Adresse e-mail non valide.')
        return res.status(200).json({error: 'Adresse e-mail non valide.'})
    }

    if (mdp.length < 6 || mdp.length > 35)
    {
        console.log('Le mot de passe doit contenir entre 6 et 35 caractères.')
        return res.status(200).json({error: 'Le mot de passe doit contenir entre 6 et 35 caractères.'})
    }

    db.query(`SELECT * FROM users WHERE email = "${email}"`, (err, results, rows) => {
        console.log(results.length)
        if (results.length > 0)
        {
            res.status(401).json({message: 'L\'adresse e-mail est déjà utilisé.'})
        }
        else 
        {
            bcrypt.hash(mdp, 10, (err, hash) => {
                if (err)
                {
                    return res.status(401).json({message: err})
                }
                console.log('Email : ', email, ' / Prenom : ', prenom, ' / Nom : ', nom, ' / Mdp : ', mdp, ' / Mdp hash : ', hash)

                db.query(`INSERT INTO users (nom, prenom, email, pass, avatar) VALUES ("${nom}", "${prenom}", "${email}", "${hash}", NULL)`, (err, results, fields) => {
                    if (err)
                    {
                        console.log(err)
                        return res.status(400).json({error: err})
                    }
                    return res.status(201).json({message: 'Votre compte a bien été crée.'})
                })
            })
        }
    })
}

// Connexion de l'utilisateur
exports.login = (req, res, next) => {

    let email = req.body.email
    let mdp = req.body.pass

    console.log('Email :', email, 'MDP :', mdp)

    db.query(`SELECT * FROM users WHERE email = "${email}"`, (err, results, rows) => {
        console.log('Res =>', results)
        if (results.length > 0)
        {
            bcrypt.compare(mdp, results[0].pass)
            .then(user => {
                if (!user)
                {
                    return res.status(401).json({mesage: 'Le mot de passe que vous avez saisi est incorrect.'})
                }
                else
                {
                    res.status(200).json({
                        userId: results[0].id,
                        nom: results[0].nom,
                        prenom: results[0].prenom,
                        email: results[0].email,
                        admin: results[0].isAdmin,
                        token: jwt.sign({
                            userId: results[0].id
                        }, process.env.SECRET_TOKEN, {
                            expiresIn: '72h'
                        })
                    })
                }
            })
        }
        else 
        {
            console.log('Ce compte n\'existe pas ou plus.')
            res.status(404).json({message: 'Ce compte n\'existe pas ou plus.'})
        }
    })
}

// Mise-à-jour de l'utilisateur
exports.update = (req, res, next) => {
    let userId = req.body.userId
    let nom = req.body.nom
    let prenom = req.body.prenom
    let email = req.body.email
    let mdp = req.body.pass

    console.log(userId, nom, prenom, email, mdp)

    // Modification des informations de l'utilisateur
    db.query(`UPDATE users SET nom = "${nom}", prenom = "${prenom}", email = "${email}" WHERE id = "${userId}"`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(200).json({message: err})
        }
        console.log('Le profil a bien été modifié.')
    })

    // Modification de l'image avatar
    if (req.file)
    {
        console.log(`${req.protocol}://${req.get('host')}/${req.file.path}`)
        let avatar = req.protocol + '://' + req.get('host') + '/' + req.file.path
        db.query(`UPDATE users SET avatar = "${avatar}" WHERE id = "${userId}"`, (err, result) => {
            if (err)
            {
                console.log(err)
                return res.status(200).json({message: err})
            }
            console.log('L\'avatar a bien été modifié.')
        })
    }

    if (mdp)
    {
        bcrypt.hash(mdp, 10, (err, hash) => {
            if (err)
            {
                console.log(err)
                return res.status(200).json({message: err})
            }

            db.query(`UPDATE users SET pass = "${hash}" WHERE id = "${userId}"`, (err, result) => {
                if (err)
                {
                    console.log(err)
                    return res.status(200).json({message: err})
                }

                console.log('Le mot de passe a bien été modifié.')
            })
        })
    }

    db.query(`SELECT * FROM users WHERE id = "${userId}"`, (err, result) => {
        if (err)
        {
            console.log(err)
            return res.status(401).json({message: err})
        }

        return res.status(200).json({
            userId: result[0].id,
            nom: result[0].nom,
            prenom: result[0].prenom,
            email: result[0].email,
            admin: result[0].isAdmin,
            avatar: result[0].avatar
        })
    })
}

// Suppression de l'utilisateur
exports.delete = (req, res, next) => {
    db.query(`DELETE FROM users WHERE id = ${req.params.id}`, (err, result, field) => {
        if (err)
        {
            console.log(err)
            return res.status(400).json({message: err})
        }

        fs.unlink('./images/' + req.params.id, (url, err) => {
            if (err)
            {
                return console.log(err)
            }

            return console.log('Suppression de l\'image de l\'utilisateur ' + req.params.id + ' a bien été supprimé.')
        })

        return res.status(200).json(result)
    })
}

exports.errors = (err, req, res, next) => {
    console.log('Error')
    res.status(401).json({message: 'Error ' + err})
}