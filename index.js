const express = require('express')

const app = express()

const User = require('./services/user')
const userObj = new User()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        "name":"Feroz"
    })
})

app.post('/postURL', (req, res) => {
    res.json(req.body)
})

app.get('/user', (req, res) => {

    let user = userObj.getUsers()

    res.send(user)
})

app.get('/getUser/:id', (req, res) => {
    let user = userObj.getUserById(req.params.id)
    res.send(user)
})

app.get('/getUserByName/:name', (req, res) => {
    let user = userObj.getUserByName(req.params.name)
    res.send(user)
})

app.get('/usersCount', (req, res) => {
    res.json(userObj.getUsersCount())
})

app.post('/addUser', (req, res) => {
    res.json(userObj.addNewUser(req.body))
})


app.listen(3000)
