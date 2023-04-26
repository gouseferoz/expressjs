const jwt = require('jsonwebtoken');

class Admin {
    getToken(name) {
        return jwt.sign({ name: name }, "secretKey");
    }
}

module.exports = Admin