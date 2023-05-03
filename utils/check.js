const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkMe(req, res, next) {

    try {
        let verifyToken = jwt.verify(req.headers.authorization, process.env.JWT_SIGN_KEY)

        if(verifyToken.college == "VJIT") {
            next()
        } else {
            res.status(401).send("UnAuthorized")
        }

    } catch (error) {
        res.status(401).send("UnAuthorized")
    }

}

module.exports = checkMe