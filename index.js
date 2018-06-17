const express = require('express');
require('./services/passport');
require('./services/bearer');

const app = express();

app.use(express.static('public'));

require('./routes/authRoutes')(app);

app.locals.knex = require('./db/db');

if (process.env.NODE_ENV !== 'production') {
    app.locals.knex.on('query', query => {
        console.log(query.sql);
    });
}

const passport = require('passport');
// curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:5000/
// curl -v http://127.0.0.1:5000/?access_token=123456789
const only_logged_in = passport.authenticate('bearer', { session: false });

app.get('/words', only_logged_in, (req, res) => {
    res.json(req.user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
