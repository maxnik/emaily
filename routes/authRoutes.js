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
            const user = req.user;
            res.json({
                auth_token: user.auth_token,
                email: user.email || user.google_email
            });
        }
    );
};
