const express = require('express')
const router = express.Router()
const auth = require('../utils/auth')
const User = require('../services/user')
const userObj = new User()

router.get('/', (req, res) => {
    let user = userObj.getUsers()
    res.send(user)
})

router.get('/token', async (req, res) => {
    let token = await userObj.getToken()
    res.send({
        "token": token
    })
})

router.get('/getById/:id', auth, (req, res) => {
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

router.get('/users/:id', async (req, res) => {
    let users = await userObj.getUsers(req.params.id)
    res.json(users)
})

module.exports = router