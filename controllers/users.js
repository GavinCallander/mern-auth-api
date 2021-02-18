const BCRYPT = require('bcrypt');
const DB = require('../models');
const ROUTER = require('express').Router();

const { createUserToken } = require('../middleware/auth');

// login - POST '/api/login'
ROUTER.post('/login', (req, res) => {
    DB.User.findOne({ email: req.body.email })
    .then(user => res.json({ token: createUserToken(req, user), user }))
    .catch(err => {
        console.log(err);
        res.json(err)
    });
});

// signup - POST '/api/signup'
ROUTER.post('/signup', (req, res) => {
    BCRYPT.hash(req.body.password, 10)
    .then(hash => DB.User.create({
            email: req.body.email,
            name: req.body.name,
            password: hash
    }))
    .then(createdUser => res.json({ 
        token: createUserToken(req, createdUser),
        user: createdUser
    }))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

module.exports = ROUTER;