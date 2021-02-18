require('dotenv').config();
const BCRYPT = require('bcrypt');
const DB = require('../models');
const PASSPORT = require('passport');
const JWT_PASSPORT = require('passport-jwt');

const OPTIONS = {
    jwtFromRequest: JWT_PASSPORT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const findUser = (jwt_payload, done) => {
    DB.User.findById(jwt_payload.id)
    .then(user => done(null, user))
    .catch(done());
};

const STRATEGY = new JWT_PASSPORT.Strategy(OPTIONS, findUser);

PASSPORT.use(STRATEGY);

PASSPORT.initialize();

const createUserToken = (req, user) => {
    const validPassword = BCRYPT.compareSync(req.body.password, user.password);
    if (!user || !validPassword) {
        let err = new Error('Invalid Credentials');
        err.statusCode = 422;
        throw err;
    }
    else {
        return jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: 1200 }
        );
    };
};

module.exports = { createUserToken };