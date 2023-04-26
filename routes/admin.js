const express = require('express')
const router = express.Router()
const auth = require('../utils/auth')
const Admin = require('../services/admin')
const admin = new Admin()

router.get('/', auth, (req, res) => {
    res.send("I am admin");
})

router.get('/token', (req, res) => {
    let token = admin.getToken("hasa")
    res.send(token)
})

module.exports = router