const express = require('express')

const app = express()

const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        "message":"Welcome to My API"
    })
})

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

app.listen(3000)