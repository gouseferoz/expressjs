const jwt = require('jsonwebtoken')

function check(req, res, next) {
    let headers = req.headers
    console.log(headers)
    let authHeader = headers.authentication
    console.log(authHeader)

    try {
        let verify = jwt.verify(authHeader, 'secretKey')
        next()
    } catch (error) {
        res.status(401).send("Un Authorized")
    }

}

module.exports = check