const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const knex = require('../db/db');

passport.use(
    new BearerStrategy((token, done) => {
        knex('users')
            .first('*')
            .where('auth_token', token)
            .asCallback((err, user) => {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            });
    })
);
