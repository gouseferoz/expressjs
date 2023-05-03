const jwt = require('jsonwebtoken');

require('dotenv').config()

class Admin {
    getToken(name) {
        return jwt.sign({ name: name }, process.env.JWT_SIGN_KEY);
    }
}

module.exports = Admin