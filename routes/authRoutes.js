const passport = require('passport');

module.exports = app => {
    app.use(passport.initialize());

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            res.cookie('auth_token', req.user.auth_token, { httpOnly: false });
            res.redirect('/login/google');
        }
    );
};
