const express = require('express')

const app = express()

const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')

const check = require('./utils/check')

require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    console.log(process.env.JWT_SIGN_KEY)
    res.send({
        "message":"Welcome to My API"
    })
})

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

app.listen(3001)