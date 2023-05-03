const jwt = require('jsonwebtoken')
require('dotenv').config()

function check(req, res, next) {
    let headers = req.headers
    console.log(headers)
    let authHeader = headers.authentication
    console.log(authHeader)

    try {
        let verify = jwt.verify(authHeader, process.env.JWT_SIGN_KEY)
        next()
    } catch (error) {
        res.status(401).send("Un Authorized")
    }

}

module.exports = check