const express = require('express')
const router = express.Router()

router.get('/admin', (req, res) => {
    res.send("I am admin");
})

module.exports = router