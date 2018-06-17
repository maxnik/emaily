const express = require('express');
require('./services/passport');
require('./services/bearer');

const app = express();

require('./routes/authRoutes')(app);

app.locals.knex = require('./db/db');

if (process.env.NODE_ENV !== 'production') {
    app.locals.knex.on('query', query => {
        console.log(query.sql);
    });
}

const passport = require('passport');
const only_logged_in = passport.authenticate('bearer', { session: false });

app.get('/words', only_logged_in, (req, res) => {
    res.json(req.user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
