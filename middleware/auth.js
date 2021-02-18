const DB = require('../models');
const PASSPORT = require('passport');
const JWT_PASSPORT = require('passport-jwt');

const OPTIONS = {
    jwtFromRequest: JWT_PASSPORT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'supersecretstring'
};

const findUser = (jwt_payload, done) => {
    DB.User.findById(jwt_payload.id)
    .then(user => done(null, user))
    .catch(err => done(err));
};

const STRATEGY = new JWT_PASSPORT.Strategy(OPTIONS, findUser);

