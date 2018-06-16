const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

app.locals.knex = require('./db/db');

if (process.env.NODE_ENV !== 'production') {
    app.locals.knex.on('query', query => {
        console.log(query.sql);
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
