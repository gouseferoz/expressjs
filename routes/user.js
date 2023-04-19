const express = require('express')
const router = express.Router()

const User = require('../services/user')
const userObj = new User()

router.get('/', (req, res) => {
    let user = userObj.getUsers()
    res.send(user)
})

router.get('/getById/:id', (req, res) => {
    let user = userObj.getUserById(req.params.id)
    res.send(user)
})

router.get('/getByName/:name', (req, res) => {
    let user = userObj.getUserByName(req.params.name)
    res.send(user)
})

router.get('/count', (req, res) => {
    res.json(userObj.getUsersCount())
})

router.post('/add', (req, res) => {
    res.json(userObj.addNewUser(req.body))
})

module.exports = router