const bcrypt = require('bcrypt')
const fs = require('fs')
const db = require('../db-steven')

exports.signup = (req, res, next) => {
    const email = req.body.email
    const prenom = req.body.prenom
    const nom = req.body.nom
    const mdp = req.body.pass

    console.log('Email : ', email, ' / Prenom : ', prenom, ' / Nom : ', nom, ' / Mdp : ', mdp, ' / Mdp hash : ', hash)

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!email.match(regex))
    {
        return res.status(200).json({error: 'Adresse e-mail non valide.'})
    }

    if (mdp.length < 6 || mdp > 35)
    {
        return res.status(200).json({error: 'Le mot de passe doit contenir entre 6 et 35 caractères.'})
    }

    bcrypt.hash(mdp, 10, (err, hash) => {
        if (err)
        {
            return res.status(401).json({message: err})
        }

        console.log('Email : ', email, ' / Prenom : ', prenom, ' / Nom : ', nom, ' / Mdp : ', mdp, ' / Mdp hash : ', hash)
    })

    //db.query(`SELECT * FROM users WHERE email = ${}`)
}

exports.test = (req, res, next) => {
    console.log(req)
    console.log(res)
    console('Coucou !!')
}

exports.errors = (err, req, res, next) => {
    console.log('Error')
    res.status(401).json({message: 'Error ' + err})
}