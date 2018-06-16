exports.up = async function(knex) {
    await knex.schema.createTable('users', table => {
        table.increments('id').primary();

        table.string('email').unique();
        table.string('password_digest');

        table.string('auth_token').unique();

        table.string('google_id').unique();
        table.string('google_display_name');
        table.string('google_given_name');
        table.string('google_email');
        table.string('google_language');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users');
};
