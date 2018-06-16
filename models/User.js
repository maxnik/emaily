const crypto = require('crypto');

const knex = require('../db/db');

class User {
    static async find_or_create_from_google(profile) {
        const user = await knex
            .first('auth_token', 'google_email')
            .from('users')
            .where('google_id', profile.id);

        if (!user) {
            const new_user = this.new_from_google(profile);
            new_user.auth_token = await this.generate_token();

            await knex('users').insert(new_user);
            return new_user;
        }

        return user;
    }

    static new_from_google(profile) {
        const u = new User();
        u.google_id = profile.id;
        u.google_display_name = profile.displayName;
        u.google_given_name = profile.name.givenName;
        u.google_email = profile.emails[0].value;
        u.google_language = profile._json.language;
        return u;
    }

    static async generate_token(byte_length = 16) {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(byte_length, (err, buffer) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(buffer.toString('base64'));
                }
            });
        });
    }
}

module.exports = User;
